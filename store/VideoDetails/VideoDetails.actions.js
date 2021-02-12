export const SEARCH_VIDEO_DETAILS = 'SEARCH_VIDEO_DETAILS';
export const SEARCH_VIDEO_DETAILS_FAIL = 'SEARCH_VIDEO_DETAILS_FAIL';
export const SET_VIDEO_DETAILS = 'SET_VIDEO_DETAILS';

export const searchVideoDetails = ({id = ''}) => ({
  type: SEARCH_VIDEO_DETAILS,
  payload: {id},
});

export const searchVideoFailDetails = () => ({
  type: SEARCH_VIDEO_DETAILS_FAIL,
});

export const setVideoDetails = (movies) => ({
  type: SET_VIDEO_DETAILS,
  payload: movies,
});
