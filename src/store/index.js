import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

export default createStore({
  state: {
    shows: null,
    foundShows: null,
    movies: null,
    foundMovies: null,
    loading: false,
    searching: false,
    inputText: "",
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  mutations: {
    SET_SHOWS(state, shows) {
      state.shows = shows;
    },
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_FOUNDSHOWS(state, foundShows) {
      state.foundShows = foundShows;
    },
    SET_SEARCHING(state, searching) {
      state.searching = searching;
    },
    SET_NEWSEARCH(state, newSearch) {
      state.inputText = newSearch;
    },
  },
  actions: {
    fetchShows({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_SHOWS", null);
      axios
        .get("https://api.tvmaze.com/shows")
        .then((response) => {
          commit("SET_LOADING", false);
          commit("SET_SHOWS", response.data);
        })
        .catch((err) => {
          commit("SET_LOADING", false);
          commit("SET_SHOWS", null);
          console.log(err);
        });
    },
    searchShow({ commit, state }) {
      commit("SET_SEARCHING", true);
      commit("SET_FOUNDSHOWS", null);
      setTimeout(() => {
        axios
          .get(`https://api.tvmaze.com/search/shows?q=${state.inputText}`)
          .then((response) => {
            commit("SET_SEARCHING", false);
            commit("SET_FOUNDSHOWS", response.data);
          })
          .catch((err) => {
            commit("SET_SEARCHING", false);
            commit("SET_FOUNDSHOWS", null);
            console.log(err);
          });
      }, 500);
    },
    fetchMovies({ commit }) {
      commit("SET_SHOWS", null);
      axios
        .request({
          method: 'GET',
          url: "https://online-movie-database.p.rapidapi.com/auto-complete",
          params: { q: "game" },
          headers: {
            "X-RapidAPI-Key":
              "3bf4a75effmsh3336a293b2efa04p164eefjsnd13c9fb7e581",
            "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
          },
        })
        .then((response) => {
          commit("SET_MOVIES", response.data);
          console.log("🚀 ~ file: index.js ~ line 89 ~ .then ~ response.data", response.data)
        })
        .catch((err) => {
          commit("SET_MOVIES", null);
          console.log(err);
        });
    },
  },
});
