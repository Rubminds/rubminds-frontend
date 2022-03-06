import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  SEND_MAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_ERROR,
  START_MAIL,
  START_MAIL_SUCCESS,
  START_MAIL_ERROR,
  SET_STEP,
  SET_STEP_SUCCESS,
  SET_STEP_ERROR,
  SET_CHATROOM,
  SET_CHATROOM_SUCCESS,
  SET_CHATROOM_ERROR,
} from '../../constants'; //액션명 constants에서 선언하여 사용

function sendMailAPI(data) {
  return axios.post('/chat', data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });
}
function* sendMail(action) {
  let result;
  try {
    result = yield call(sendMailAPI, action.data);
    try {
      yield put({
        type: SEND_MAIL_SUCCESS,
        data: result,
      });
    } catch (err) {
      //에러 발생시 이벤트
      yield put({
        type: SEND_MAIL_ERROR,
        error: err,
      });
    }
  } catch (err) {
    alert(err.response.data.error.info);
  }
}

function startMailAPI(data) {
  return axios.post('/chat', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* startMail(action) {
  let result;
  try {
    result = yield call(startMailAPI, action.data);
    try {
      yield put({
        type: START_MAIL_SUCCESS,
        data: result,
      });
    } catch (err) {
      //에러 발생시 이벤트
      yield put({
        type: START_MAIL_ERROR,
        error: err,
      });
    }
  } catch (err) {
    console.log(err.response);
  }
}

function* setStep(action) {
  try {
    yield put({
      type: SET_STEP_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: SET_STEP_ERROR,
      error: err,
    });
  }
}

function* setChatroom(action) {
  try {
    yield put({
      type: SET_CHATROOM_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: SET_CHATROOM_ERROR,
      error: err,
    });
  }
}

function* watchSendMail() {
  yield takeLatest(SEND_MAIL, sendMail);
}
function* watchStartMail() {
  yield takeLatest(START_MAIL, startMail);
}
function* watchSetStep() {
  yield takeLatest(SET_STEP, setStep);
}
function* watchSetChatroom() {
  yield takeLatest(SET_CHATROOM, setChatroom);
}

export default function* mailSaga() {
  yield all([
    fork(watchSendMail),
    fork(watchStartMail),
    fork(watchSetStep),
    fork(watchSetChatroom),
  ]);
}
