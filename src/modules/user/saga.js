import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  SIGNIN_USER, 
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR, 
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
  TOGGLE_CHAT_MODAL,
  TOGGLE_CHAT_MODAL_ERROR,
  TOGGLE_CHAT_MODAL_SUCCESS,
  LOAD_USER_INFO,
  LOAD_USER_INFO_SUCCESS,
  LOAD_USER_INFO_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from '../../constants'; //액션명 constants에서 선언하여 사용

// 액션에서 axios 요청 필요할 때

function signupUserAPI(data) {
  return axios.post('https://dev.rubminds.site/api/user/signup', data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
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

function* toggleChatModal() {
  console.log('togglechat saga')
  try {
    yield put({
      type: TOGGLE_CHAT_MODAL_SUCCESS,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: TOGGLE_CHAT_MODAL_ERROR,
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

function* logoutUser() {console.log('logout user saga')
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

function* signinUser(action) {
  console.log('SignIn user saga')
  try {
    yield put({
      type: SIGNIN_USER_SUCCESS,
      data : action, 
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: SIGNIN_USER_ERROR,
      error: err,
    });
  }
}

//액션 감지 함수
//takeLatest안의 액션을 감지.

function* watchSigninUser(){
  yield takeLatest(SIGNIN_USER, signinUser); 
}
function* watchSignupUser() {
  yield takeLatest(SIGNUP_USER, signupUser);
}

function* watchToggleChatModal() {
  yield takeLatest(TOGGLE_CHAT_MODAL, toggleChatModal);
}
function* watchLoadUserInfo() {
  yield takeLatest(LOAD_USER_INFO, loadUserInfo);
}
function* watchLogoutUser() {console.log('watch logout')
  yield takeLatest(LOGOUT_USER, logoutUser);
}

export default function* userSaga() {
  yield all([
    fork(watchSigninUser), 
    fork(watchSignupUser),
    fork(watchToggleChatModal),
    fork(watchLoadUserInfo),
    fork(watchLogoutUser),
  ]);
}
