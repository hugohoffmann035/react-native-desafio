import {takeLatest, call, put} from 'redux-saga/effects';
import {setVideo, SEARCH_VIDEO, searchVideoFail} from './VideoStore.actions';
import api from '../../services/api';

export function* searchVideoWatcher() {
  yield takeLatest(SEARCH_VIDEO, searchVideoFLow);
}

function* searchVideoFLow(action) {
  try {
    const {search} = action.payload;
    const videos = yield call(api.get, `/?apikey=28657bf&s=${search}`);
    const {Response} = videos.data;
    if (Response == 'False') return yield put(searchVideoFail());

    yield put(setVideo(videos));
  } catch (err) {
    yield put(searchVideoFail());
  }
}
