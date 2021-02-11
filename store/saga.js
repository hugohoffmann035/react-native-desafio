import {fork} from 'redux-saga/effects';
import {loadMoviesWatcher} from './Movies/Movies.saga';

export function* rootSaga() {
  yield fork(loadMoviesWatcher);
}
