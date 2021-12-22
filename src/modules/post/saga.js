import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import { LOAD_POSTS, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS } from '../../constants'; //액션명 constants에서 선언하여 사용

// 액션에서 axios 요청 필요할 때
function loadPostsAPI() {
  return axios.get('https://dev.rubminds.site/api/posts');
}

//axios요청시 주석처럼 작성.
//axios에서 받은 결과를 success 로 보내줌.
function* loadPosts() {
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
}

//액션 감지 함수
//takeLatest안의 액션을 감지.
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS, loadPosts);
}

export default function* postSaga() {
  yield all([fork(watchLoadPosts)]);
}
