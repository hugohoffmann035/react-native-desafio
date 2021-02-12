import {takeLatest, call, put} from 'redux-saga/effects';
import {setMovie, SEARCH_MOVIE, searchMovieFail} from './Movies.actions';
import api from '../../services/api';

export function* searchMoviesWatcher() {
  yield takeLatest(SEARCH_MOVIE, searchMoviesFLow);
}

function* searchMoviesFLow(action) {
  try {
    const {search} = action.payload;
    const movies = yield call(api.get, `/?apikey=28657bf&s=${search}`);
    const {Response} = movies.data;
    if (Response == 'False') return yield put(searchMovieFail());

    yield put(setMovie(movies));
  } catch (err) {
    yield put(searchMovieFail());
  }
}
