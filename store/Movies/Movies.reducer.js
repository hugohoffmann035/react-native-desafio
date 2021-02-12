import {SEARCH_MOVIE, SEARCH_MOVIE_FAIL, SET_MOVIE} from './Movies.actions';

const INITIAL_STATE = {
  docs: [],
  loading: false,
  error: null,
};

export const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIE: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEARCH_MOVIE_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'Não foi possível encontrar.',
      };
    }
    case SET_MOVIE: {
      return {
        ...state,
        docs: action.payload.data.Search,
        loading: false,
      };
    }
    default:
      return state;
  }
};
