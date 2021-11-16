import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
} from '../../constants'; //액션명 constants에서 선언하여 사용

// 액션에서 axios 요청 필요할 때
function signupUserAPI(data){
    return axios.post('/user/signup', data);
}

//axios요청시 주석처럼 작성.
//axios에서 받은 결과를 success 로 보내줌.
function* signupUser() {
  const result = '';//yield call(signupUserAPI, action.data);
  try {
    yield put({
      type: SIGNUP_USER_SUCCESS,
      data: result,
    });
  } catch (err) { //에러 발생시 이벤트
    yield put({
      type: SIGNUP_USER_ERROR,
      error: err,
    });
  }
}

//액션 감지 함수
//takeLatest안의 액션을 감지.
function* watchSignupUser() {
  yield takeLatest(SIGNUP_USER, signupUser);
}

export default function* userSaga() {
  yield all([fork(watchSignupUser)]);
}
