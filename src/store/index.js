import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    shows: null,
    foundShows: null,
    loading: false,
    searching: false,
    inputText: "",
  },
  mutations: {
    SET_SHOWS(state, shows) {
      state.shows = shows;
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
    searchShow({ commit, dispatch, state }) {
      commit("SET_SEARCHING", true);
      commit("SET_FOUNDSHOWS", null);
      setTimeout(() => {
        axios
          .get(`https://api.tvmaze.com/search/shows?q=${state.inputText}`)
          .then((response) => {
            commit("SET_SEARCHING", false);
            commit("SET_FOUNDSHOWS", response.data);
            if (state.inputText === "") {
              dispatch("fetchShows");
            }
            commit("SET_SHOWS", null);
          })
          .catch((err) => {
            commit("SET_SEARCHING", false);
            commit("SET_FOUNDSHOWS", null);
            console.log(err);
          });
      }, 500);
    },
  },
});
