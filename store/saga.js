import {fork} from 'redux-saga/effects';
import {searchMoviesWatcher} from './Movies/Movies.saga';

export function* rootSaga() {
  yield fork(searchMoviesWatcher);
}
