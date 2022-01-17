import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  SEND_MAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_ERROR,
  DELETE_MAIL,
  DELETE_MAIL_SUCCESS,
  DELETE_MAIL_ERROR,
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

function deleteMailAPI(data) {
  return axios.post('/', data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });
}
function* deleteMail(action) {
  const result = yield call(deleteMailAPI, action.data);
  try {
    yield put({
      type: DELETE_MAIL_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: DELETE_MAIL_ERROR,
      error: err,
    });
  }
  console.log('finished delete mail saga');
}

function* watchSendMail() {
  yield takeLatest(SEND_MAIL, sendMail);
}
function* watchDeleteMail() {
  yield takeLatest(DELETE_MAIL, deleteMail);
}

export default function* mailSaga() {
  yield all([fork(watchSendMail), fork(watchDeleteMail)]);
}
