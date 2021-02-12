import {takeLatest, call, put} from 'redux-saga/effects';
import {
  setVideoDetails,
  SEARCH_VIDEO_DETAILS,
  searchVideoFailDetails,
} from './VideoDetails.actions';
import api from '../../services/api';

export function* searchVideoDetailsWatcher() {
  yield takeLatest(SEARCH_VIDEO_DETAILS, searchVideoDetailsFLow);
}

function* searchVideoDetailsFLow(action) {
  try {
    const {id} = action.payload;
    if (!id) return yield put(searchVideoFailDetails());
    const videos = yield call(api.get, `/?apikey=28657bf&i=${id}`);
    yield put(setVideoDetails(videos));
  } catch (err) {
    yield put(searchVideoFailDetails());
  }
}
