import { takeEvery, put, call } from 'redux-saga/effects';
import { PROFILE_REQUEST, PROFILE_UPDATE_REQUEST } from '../types';
import {
  profileSuccess,
  profileUpdateSuccess,
  signOutRequest,
} from '../actions';
import axios from '../api';

const currentUser = JSON.parse(localStorage.getItem('user')) || '';

function* profileSaga() {
  try {
    const data = yield axios.get(`/${currentUser.id}`).then((response) => response.data);

    yield put(profileSuccess(data));
  } catch (error) {
    yield put(signOutRequest());
  }
}

function* profileUpdateSaga({ payload: { birth, name, lastname } }) {
  try {
    const data = yield axios
      .put(`/${currentUser.id}`, { birth, name, lastname })
      .then((response) => response.data);

    yield call(
      [localStorage, 'setItem'],
      'user',
      JSON.stringify(data),
    );

    yield put(profileUpdateSuccess(data));
  } catch (error) {
    yield put(signOutRequest());
  }
}

export default function* watchProfile() {
  yield takeEvery(PROFILE_REQUEST, profileSaga);
  yield takeEvery(PROFILE_UPDATE_REQUEST, profileUpdateSaga);
}
