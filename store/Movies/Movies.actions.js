export const LOAD_MOVIE = 'LOAD_MOVIE';
export const LOAD_FAILD_MOVIE = 'LOAD_FAILD_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';

export const loadMovie = ({page = 1}) => ({
  type: LOAD_MOVIE,
  payload: {page},
});

export const loadFaildMovie = () => ({
  type: LOAD_FAILD_MOVIE,
});

export const setMovie = (movies) => ({
  type: SET_MOVIE,
  payload: movies,
});
