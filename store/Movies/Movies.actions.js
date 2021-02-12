export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_FAIL = 'SEARCH_MOVIE_FAIL';
export const SET_MOVIE = 'SET_MOVIE';

export const searchMovie = ({search = ''}) => ({
  type: SEARCH_MOVIE,
  payload: {search},
});

export const searchMovieFail = () => ({
  type: SEARCH_MOVIE_FAIL,
});

export const setMovie = (movies) => ({
  type: SET_MOVIE,
  payload: movies,
});
