import {
  SEARCH_VIDEO_DETAILS,
  SEARCH_VIDEO_DETAILS_FAIL,
  SET_VIDEO_DETAILS,
} from './VideoDetails.actions';

const INITIAL_STATE = {
  details: {
    Poster: '',
    Title: '',
    Plot: '',
    Actors: '',
    Director: '',
    Writer: '',
    Released: '',
  },
  loading: false,
  error: null,
};

export const VideoDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_VIDEO_DETAILS: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case SEARCH_VIDEO_DETAILS_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Não foi possível encontrar.',
      };
    }
    case SET_VIDEO_DETAILS: {
      return {
        ...state,
        details: action.payload.data,
        loading: false,
        error: '',
      };
    }
    default:
      return state;
  }
};
