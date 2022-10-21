import { createStore } from "vuex";

export default createStore({
  state: {
    shows: null,
    searchedShows: null,
    loading: true,
    searching: true,
  },
  getters: {},
  mutations: {
    //Not able to destruct string to pass it as a prop...
    // getTopRated(shows, size) {
    //   return shows
    //     ?.sort((a, b) => b.rating.average - a.rating.average)
    //     .slice(0, size)
    //     .map((show) => show);
    // },
    // getGenres(shows, genreArg) {
    //   return shows
    //     ?.filter((show) => show.genres.some((genre) => genre === genreArg))
    //     .sort((a, b) => b.rating.average - a.rating.average)
    //     .slice(0, 10)
    //     .map((show) => show);
    // },
  },
  actions: {},
  modules: {},
});
