import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';

import {MoviesReducer} from './Movies/Movies.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    movies: MoviesReducer,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
