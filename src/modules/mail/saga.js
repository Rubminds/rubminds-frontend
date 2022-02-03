import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  SEND_MAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_ERROR,
  START_MAIL,
  START_MAIL_SUCCESS,
  START_MAIL_ERROR,
} from '../../constants'; //액션명 constants에서 선언하여 사용

function sendMailAPI(data) {
  return axios.post('/', data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });
}
function* sendMail(action) {
  const result = yield call(sendMailAPI, action.data);
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
  console.log('finished send mail saga');
}

function startMailAPI(data) {
  return axios.post('/chat',data, {
    //axios.get(`/chat/${data}?page=1&size=10`, {
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

function* watchSendMail() {
  yield takeLatest(SEND_MAIL, sendMail);
}
function* watchStartMail() {
  yield takeLatest(START_MAIL, startMail);
}

export default function* mailSaga() {
  yield all([fork(watchSendMail), fork(watchStartMail)]);
}
