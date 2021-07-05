import { fork } from 'redux-saga/effects';
import watchAuth from './authSaga';
import watchProfile from './profileSaga';

function* rootSaga() {
  yield fork(watchAuth);
  yield fork(watchProfile);
}

export default rootSaga;
