export const getTopRated = (shows) => {
  return shows
    ?.sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 10)
    .map((show) => show);
};

export const getGenres = (shows, genreArg) => {
  return shows
    ?.filter((show) => show.genres.some((genre) => genre === genreArg))
    .sort((a, b) => b.rating.average - a.rating.average)
    .map((show) => show);
};
