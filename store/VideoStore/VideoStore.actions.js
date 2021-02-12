export const SEARCH_VIDEO = 'SEARCH_MOVIE';
export const SEARCH_VIDEO_FAIL = 'SEARCH_MOVIE_FAIL';
export const SET_VIDEO = 'SET_MOVIE';

export const searchVideo = ({search = ''}) => ({
  type: SEARCH_VIDEO,
  payload: {search},
});

export const searchVideoFail = () => ({
  type: SEARCH_VIDEO_FAIL,
});

export const setVideo = (movies) => ({
  type: SET_VIDEO,
  payload: movies,
});
