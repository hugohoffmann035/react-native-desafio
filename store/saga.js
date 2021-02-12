import {fork} from 'redux-saga/effects';
import {searchVideoWatcher} from './VideoStore/VideoStore.saga';

export function* rootSaga() {
  yield fork(searchVideoWatcher);
}
