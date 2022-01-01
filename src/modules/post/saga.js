import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  CREATE_POSTS, 
  CREATE_POSTS_SUCCESS, 
  CREATE_POSTS_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POST,
  LOAD_POST_ERROR,
  LOAD_POST_SUCCESS,
  LIKE_POST,
  LIKE_POST_ERROR,
  LIKE_POST_SUCCESS,
} from '../../constants'; //액션명 constants에서 선언하여 사용

function createPostAPI(data) {
  return axios.post('https://dev.rubminds.site/api/post', data , {
    headers : {
      Authorization : 'Bearer ' +  localStorage.getItem('accessToken')
    }
  })
}

function* createPost(action) { 
  console.log('요청 전 데이터', action.data);
  const result = yield call(createPostAPI, action.data);
  try {
    yield put({
      type: CREATE_POSTS_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: CREATE_POSTS_ERROR,
      error: err,
    });
  }
  console.log('finished createPosts saga');
}

function loadPostsAPI(query) {
  return axios.get(`/posts${query}`);
}

//axios요청시 주석처럼 작성.
//axios에서 받은 결과를 success 로 보내줌.
function* loadPosts(action) {
  console.log('access loadPosts saga');
  const result = yield call(loadPostsAPI, action.data);
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
  return axios.get(`/post/${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* loadPost(action) {
  console.log(action.data);
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

function likePostAPI(data) {
  return axios.post(`/post/${data}/like`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* likePost(action) {
  console.log(action.data);
  console.log('access likePost saga');
  const result = yield call(likePostAPI, action.data);
  console.log(result);
  try {
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: LIKE_POST_ERROR,
      error: err,
    });
  }
  console.log('finished likePost saga');
}

//액션 감지 함수
//takeLatest안의 액션을 감지.
function* watchCreatePost() {
  yield takeLatest(CREATE_POSTS, createPost); 
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS, loadPosts);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST, loadPost);
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST, likePost);
}

export default function* postSaga() {
  yield all([fork(watchCreatePost),fork(watchLoadPosts), fork(watchLoadPost), fork(watchLikePost)]);
}
