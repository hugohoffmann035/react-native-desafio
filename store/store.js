import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';

import {MoviesReducer} from './VideoStore/VideoStore.reducer';
import {VideoDetailsReducer} from './VideoDetails/VideoDetails.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    videos: MoviesReducer,
    video_details: VideoDetailsReducer,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
