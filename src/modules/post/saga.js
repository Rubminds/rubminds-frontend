import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
  AUTH_LOAD_POSTS,
  AUTH_LOAD_POSTS_ERROR,
  AUTH_LOAD_POSTS_SUCCESS,
  LOAD_POST,
  LOAD_POST_ERROR,
  LOAD_POST_SUCCESS,
  LIKE_POST,
  LIKE_POST_ERROR,
  LIKE_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  SUBMIT_RESULT_POST,
  SUBMIT_RESULT_POST_ERROR,
  SUBMIT_RESULT_POST_SUCCESS,
  CHANGE_POST_STATUS,
  CHANGE_POST_STATUS_ERROR,
  CHANGE_POST_STATUS_SUCCESS,
} from '../../constants'; //액션명 constants에서 선언하여 사용

function createPostAPI(data) {
  return axios.post('/post', data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* createPost(action) {
  const result = yield call(createPostAPI, action.data);
  try {
    yield put({
      type: CREATE_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: CREATE_POST_ERROR,
      error: err,
    });
  }
}

function loadPostsAPI(query) {
  return axios.get(`/posts${query}`);
}

function* loadPosts(action) {
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
}

function editPostAPI(data) {
  return axios.post(`/post/${data.id}/update`, data.formData, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* editPost(action) {
  const result = yield call(editPostAPI, action.data);
  try {
    yield put({
      type: EDIT_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: EDIT_POST_ERROR,
      error: err,
    });
  }
}

function authLoadPostsAPI(query) {
  return axios.get(`/posts${query}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}

function* authLoadPosts(action) {
  const result = yield call(authLoadPostsAPI, action.data);
  try {
    yield put({
      type: AUTH_LOAD_POSTS_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: AUTH_LOAD_POSTS_ERROR,
      error: err,
    });
  }
}

function loadPostAPI(data) {
  return axios.get(`/post/${data}`);
}
function* loadPost(action) {
  const result = yield call(loadPostAPI, action.data);
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
}

function likePostAPI(data) {
  return axios.post(`/post/${data}/like`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* likePost(action) {
  const result = yield call(likePostAPI, action.data);
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
}

function deletePostAPI(data) {
  return axios.delete(`/post/${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* deletePost(action) {
  const result = yield call(deletePostAPI, action.data);
  try {
    yield put({
      type: DELETE_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    //에러 발생시 이벤트
    yield put({
      type: DELETE_POST_ERROR,
      error: err,
    });
  }
}

function submitResultPostAPI(data) {
  return axios.post(`/post/${data.postId}/complete`, data.content, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'multipart/form-data',
    },
  });
}
function* submitResultPost(action) {
  const result = yield call(submitResultPostAPI, action.data);
  try {
    yield put({
      type: SUBMIT_RESULT_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: SUBMIT_RESULT_POST_ERROR,
      error: err,
    });
  }
}

function changePostStatusAPI(data) {
  return axios.put(`/post/${data.postId}/changeStatus`, data.content, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* changePostStatus(action) {
  const result = yield call(changePostStatusAPI, action.data);
  try {
    yield put({
      type: CHANGE_POST_STATUS_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: CHANGE_POST_STATUS_ERROR,
      error: err,
    });
  }
}

//액션 감지 함수
//takeLatest안의 액션을 감지.
function* watchCreatePost() {
  yield takeLatest(CREATE_POST, createPost);
}
function* watchEditPost() {
  yield takeLatest(EDIT_POST, editPost);
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
function* watchDeletePost() {
  yield takeLatest(DELETE_POST, deletePost);
}
function* watchAuthLoadPosts() {
  yield takeLatest(AUTH_LOAD_POSTS, authLoadPosts);
}
function* watchSubmitResultPost() {
  yield takeLatest(SUBMIT_RESULT_POST, submitResultPost);
}
function* watchChangePostStatus() {
  yield takeLatest(CHANGE_POST_STATUS, changePostStatus);
}

export default function* postSaga() {
  yield all([
    fork(watchCreatePost),
    fork(watchEditPost),
    fork(watchLoadPosts),
    fork(watchLoadPost),
    fork(watchLikePost),
    fork(watchDeletePost),
    fork(watchAuthLoadPosts),
    fork(watchSubmitResultPost),
    fork(watchChangePostStatus),
  ]);
}
