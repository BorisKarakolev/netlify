// import Vue from "vue";

const getTopRated = (shows, size) => {
  return shows
    ?.sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, size);
};

const getGenres = (shows, genreArg) => {
  return shows
    ?.filter((show) => show.genres.some((genre) => genre === genreArg))
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 10);
};

// Vue.mixin({
//   methods: {
//     getTopRated(shows, size) {
//       return shows
//         ?.sort((a, b) => b.rating.average - a.rating.average)
//         .slice(0, size);
//     },
//     getGenres(shows, genreArg) {
//       return shows
//         ?.filter((show) => show.genres.some((genre) => genre === genreArg))
//         .sort((a, b) => b.rating.average - a.rating.average)
//         .slice(0, 10);
//     },
//   },
// });

export default {
  getTopRated,
  getGenres,
};
