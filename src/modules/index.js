import React from 'react';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import post from './post';
import team from './team';
import mail from './mail';
import userSaga from './user/saga';
import postSaga from './post/saga';
import teamSaga from './team/saga';
import mailSaga from './mail/saga';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
//axios.defaults.withCredentials = true; //saga에서 보내는 axios는 전부 쿠키를 포함한다.

const persistConfig = {
  key: 'root',
  storage,
  blacklist:["submitResultPostDone"]
};
// 새로운 리듀서 장착시 이쪽에 추가
const rootReducer = combineReducers({
  user,
  post,
  team,
  mail,
});

// 리듀서에 해당하는 사가 추가시 이쪽에다가
export function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(teamSaga), fork(mailSaga)]);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
