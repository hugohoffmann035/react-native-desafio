import {fork} from 'redux-saga/effects';
import {searchVideoWatcher} from './VideoStore/VideoStore.saga';
import {searchVideoDetailsWatcher} from './VideoDetails/VideoDetails.saga';

export function* rootSaga() {
  yield fork(searchVideoWatcher);
  yield fork(searchVideoDetailsWatcher);
}
