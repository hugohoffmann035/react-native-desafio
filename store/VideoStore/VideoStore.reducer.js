import {SEARCH_VIDEO, SEARCH_VIDEO_FAIL, SET_VIDEO} from './VideoStore.actions';

const INITIAL_STATE = {
  docs: [],
  loading: false,
  error: null,
};

export const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_VIDEO: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case SEARCH_VIDEO_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Não foi possível encontrar.',
      };
    }
    case SET_VIDEO: {
      return {
        ...state,
        docs: action.payload.data.Search,
        loading: false,
        error: '',
      };
    }
    default:
      return state;
  }
};
