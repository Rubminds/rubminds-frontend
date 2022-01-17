import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  AUTH_LOAD_POSTS,
  AUTH_LOAD_POSTS_SUCCESS,
  AUTH_LOAD_POSTS_ERROR,
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  SUBMIT_RESULT_POST,
  SUBMIT_RESULT_POST_SUCCESS,
  SUBMIT_RESULT_POST_ERROR,
  CHANGE_POST_STATUS,
  CHANGE_POST_STATUS_SUCCESS,
  CHANGE_POST_STATUS_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  posts: [],
  singlePost: null,

  createPostLoading: false,
  createPostDone: false,
  createPostError: null,

  editPostLoading: false,
  editPostDone: false,
  editPostError: null,

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  authLoadPostsLoading: false,
  authLoadPostsDone: false,
  authLoadPostsError: null,

  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,

  likePostLoading: false,
  likePostDone: false,
  likePostError: null,

  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,

  submitResultPostLoading: false,
  submitResultPostDone: false,
  submitResultPostError: null,

  changePostStatusLoading: false,
  changePostStatusDone: false,
  changePostStatusError: null,
};

//액션 생성함수
export const createPost = data => ({
  type: CREATE_POST,
  data,
});

export const editPost = data => ({
  type: EDIT_POST,
  data,
});

export const loadPosts = data => ({
  type: LOAD_POSTS,
  data,
});

export const authLoadPosts = data => ({
  type: AUTH_LOAD_POSTS,
  data,
});

export const loadPost = id => ({
  type: LOAD_POST,
  data: id,
});

export const likePost = id => ({
  type: LIKE_POST,
  data: id,
});

export const deletePost = data => ({
  type: DELETE_POST,
  data,
});

export const submitResultPost = data => ({
  type: SUBMIT_RESULT_POST,
  data,
});

export const changePostStatus = data => ({
  type: CHANGE_POST_STATUS,
  data,
});

//리듀서
const post = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_POST:
        draft.createPostLoading = true;
        draft.createPostDone = false;
        draft.createPostError = null;
        break;
      case CREATE_POST_SUCCESS:
        draft.createPostLoading = false;
        draft.createPostDone = true;
        draft.createPostError = null;
        break;
      case CREATE_POST_ERROR:
        draft.createPostLoading = false;
        draft.createPostError = action.error;
        console.log(action.data);
        break;
      case EDIT_POST:
        draft.editPostLoading = true;
        draft.editPostDone = false;
        draft.editPostError = null;
        break;
      case EDIT_POST_SUCCESS:
        console.log('edit success', action.data);
        draft.editPostLoading = false;
        draft.editPostDone = true;
        draft.editPostError = null;
        break;
      case EDIT_POST_ERROR:
        console.log('edit error');
        draft.createPostLoading = false;
        draft.createPostError = action.error;
        console.log(action.data);
        break;
      case LOAD_POSTS:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS: //액션 처리
        draft.posts = [];
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.posts = draft.posts.concat(action.data.data.content);
        console.log(draft.posts);
        break;
      case LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case AUTH_LOAD_POSTS:
        draft.authLoadPostsLoading = true;
        draft.authLoadPostsDone = false;
        draft.authLoadPostsError = null;
        break;
      case AUTH_LOAD_POSTS_SUCCESS: //액션 처리
        draft.posts = [];
        draft.authLoadPostsLoading = false;
        draft.authLoadPostsDone = true;
        draft.posts = draft.posts.concat(action.data.data.content);
        console.log(draft.posts);
        break;
      case AUTH_LOAD_POSTS_ERROR:
        draft.authLoadPostsLoading = false;
        draft.authLoadPostsError = action.error;
        break;
      case LOAD_POST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        draft.singlePost = null;
        break;
      case LOAD_POST_SUCCESS: //액션 처리
        console.log(action.data.data);
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data.data;
        break;
      case LOAD_POST_ERROR:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LIKE_POST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS: //액션 처리
        console.log('like success');
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      case LIKE_POST_ERROR:
        console.log('like error');
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case DELETE_POST:
        draft.deletePostLoading = true;
        draft.deletePostDone = false;
        draft.deletePostError = null;
        break;
      case DELETE_POST_SUCCESS: //액션 처리
        console.log('delete success');
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        break;
      case DELETE_POST_ERROR:
        console.log('delete error');
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;
        break;
      case SUBMIT_RESULT_POST:
        draft.submitResultPostLoading = true;
        draft.submitResultPostDone = false;
        draft.submitResultPostError = null;
        break;
      case SUBMIT_RESULT_POST_SUCCESS: //액션 처리
        console.log('submit result success');
        draft.submitResultPostLoading = false;
        draft.submitResultPostDone = true;
        break;
      case SUBMIT_RESULT_POST_ERROR:
        console.log('submit result error');
        draft.submitResultPostLoading = false;
        draft.submitResultPostError = action.error;
        break;
      case CHANGE_POST_STATUS:
        draft.changePostStatusLoading = true;
        draft.changePostStatusDone = false;
        draft.changePostStatusError = null;
        break;
      case CHANGE_POST_STATUS_SUCCESS: //액션 처리
        console.log('change status success');
        draft.changePostStatusLoading = false;
        draft.changePostStatusDone = true;
        break;
      case CHANGE_POST_STATUS_ERROR:
        console.log('change status error');
        draft.changePostStatusLoading = false;
        draft.changePostStatusError = action.error;
        break;
      default:
        break;
    }
  });
};
export default post;
