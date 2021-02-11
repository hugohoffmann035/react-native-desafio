import {LOAD_MOVIE, LOAD_FAILD_MOVIE, SET_MOVIE} from './Movies.actions';

const INITIAL_STATE = {
  docs: [],
  loading: false,
  error: null,
};

export const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_MOVIE: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_FAILD_MOVIE: {
      return {
        ...state,
        loading: false,
        error: 'Não foi possível encontrar.',
      };
    }
    case SET_MOVIE: {
      return {
        ...state,
        docs: action.payload.Search,
        loading: false,
      };
    }
    default:
      return state;
  }
};
