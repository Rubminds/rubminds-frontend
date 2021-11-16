import React from 'react';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import user from './user';
import userSaga from './user/saga';

//axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true; //saga에서 보내는 axios는 전부 쿠키를 포함한다.

// 새로운 리듀서 장착시 이쪽에 추가
const rootReducer = combineReducers({
  user,
});
export default rootReducer;

// 리듀서에 해당하는 사가 추가시 이쪽에다가
export function* rootSaga() {
  yield all([
    fork(userSaga),
  ]);
}
