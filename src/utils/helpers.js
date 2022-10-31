export const getTopRated = (shows) => {
  return shows
    .map((show) => show)
    ?.sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 10)
};

export const getGenres = (shows, genreArg) => {
  return shows
    .map((show) => show)
    ?.filter((show) => show.genres.some((genre) => genre === genreArg))
    .sort((a, b) => b.rating.average - a.rating.average)
};
