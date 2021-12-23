import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POST,
  LOAD_POST_ERROR,
  LOAD_POST_SUCCESS,
} from '../../constants'; //액션명 constants에서 선언하여 사용

// 액션에서 axios 요청 필요할 때
function loadPostsAPI() {
  return axios.get('/posts?page=1&size=10&kinds=&status=');
}
//axios요청시 주석처럼 작성.
//axios에서 받은 결과를 success 로 보내줌.
function* loadPosts() {
  console.log('access loadPosts saga');
  const result = yield call(loadPostsAPI);
  try {
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: LOAD_POSTS_ERROR,
      error: err,
    });
  }
  console.log('finished loadPosts saga');
}

function loadPostAPI(data) {
  return axios.get(`/post/${data}`);
}
function* loadPost(action) {console.log(action.data);
  console.log('access loadPost saga');
  const result = yield call(loadPostAPI, action.data);
  console.log(result);
  try {
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: LOAD_POST_ERROR,
      error: err,
    });
  }
  console.log('finished loadPost saga');
}

//액션 감지 함수
//takeLatest안의 액션을 감지.
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS, loadPosts);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST, loadPost);
}

export default function* postSaga() {
  yield all([fork(watchLoadPosts), fork(watchLoadPost)]);
}
