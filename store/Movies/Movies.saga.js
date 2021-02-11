import {takeLatest, call, put} from 'redux-saga/effects';
import {LOAD_MOVIE, setMovie, loadFaildMovie} from './Movies.actions';
import Api from '../../services/api';

export function* loadMoviesWatcher() {
  yield takeLatest(LOAD_MOVIE, loadMoviesFLow);
}

function* loadMoviesFLow(action) {
  try {
    const {page} = action.payload;
    const movies = yield call(Api.get, `&s=guerra`);
    yield put(setMovie(movies));
  } catch (err) {
    yield put(loadFaildMovie());
  }
}
