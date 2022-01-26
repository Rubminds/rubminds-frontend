import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR,
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  TOGGLE_MAIL_MODAL,
  TOGGLE_MAIL_MODAL_ERROR,
  TOGGLE_MAIL_MODAL_SUCCESS,
  LOAD_USER_INFO,
  LOAD_USER_INFO_SUCCESS,
  LOAD_USER_INFO_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  TOGGLE_HEADER_MODAL,
  TOGGLE_HEADER_MODAL_SUCCESS,
  TOGGLE_HEADER_MODAL_ERROR,
} from '../../constants'; //액션명 constants에서 선언하여 사용

// 액션에서 axios 요청 필요할 때
function signupUserAPI(data) {
  return axios.post('/user/signup', data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'multipart/form-data',
    },
  });
}

//axios요청시 주석처럼 작성.
//axios에서 받은 결과를 success 로 보내줌.
function* signupUser(action) {
  const result = yield call(signupUserAPI, action.data);
  try {
    yield put({
      type: SIGNUP_USER_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: SIGNUP_USER_ERROR,
      error: err,
    });
  }
}

function* signinUser(action) {
  console.log('SignIn user saga');
  try {
    yield put({
      type: SIGNIN_USER_SUCCESS,
      data: action,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: SIGNIN_USER_ERROR,
      error: err,
    });
  }
}

function updateUserAPI(data) {
  return axios.post('/user/update', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* updateUser(action) {
  const result = yield call(updateUserAPI, action.data);
  try {
    yield put({
      type: UPDATE_USER_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: UPDATE_USER_ERROR,
      error: err,
    });
  }
}

function* toggleMailModal() {
  console.log('toggle mail saga');
  try {
    yield put({
      type: TOGGLE_MAIL_MODAL_SUCCESS,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: TOGGLE_MAIL_MODAL_ERROR,
      error: err,
    });
  }
}

function loadUserInfoAPI(data) {
  return axios.get('/user', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}

function* loadUserInfo(action) {
  const result = yield call(loadUserInfoAPI, action.data);
  try {
    yield put({
      type: LOAD_USER_INFO_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: LOAD_USER_INFO_ERROR,
      error: err,
    });
  }
}

function* logoutUser() {
  console.log('logout user saga');
  try {
    yield put({
      type: LOGOUT_USER_SUCCESS,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: LOGOUT_USER_ERROR,
      error: err,
    });
  }
}

function* toggleHeaderModal() {
  console.log('toggle header modal saga');
  try {
    yield put({
      type: TOGGLE_HEADER_MODAL_SUCCESS,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: TOGGLE_HEADER_MODAL_ERROR,
      error: err,
    });
  }
}

//액션 감지 함수
//takeLatest안의 액션을 감지.

function* watchSigninUser() {
  yield takeLatest(SIGNIN_USER, signinUser);
}

function* watchSignupUser() {
  yield takeLatest(SIGNUP_USER, signupUser);
}

function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUser);
}

function* watchToggleMailModal() {
  yield takeLatest(TOGGLE_MAIL_MODAL, toggleMailModal);
}

function* watchLoadUserInfo() {
  yield takeLatest(LOAD_USER_INFO, loadUserInfo);
}

function* watchLogoutUser() {
  yield takeLatest(LOGOUT_USER, logoutUser);
}

function* watchToggleHeaderModal() {
  yield takeLatest(TOGGLE_HEADER_MODAL, toggleHeaderModal);
}

export default function* userSaga() {
  yield all([
    fork(watchSigninUser),
    fork(watchSignupUser),
    fork(watchUpdateUser),
    fork(watchToggleMailModal),
    fork(watchLoadUserInfo),
    fork(watchLogoutUser),
    fork(watchToggleHeaderModal),
  ]);
}
