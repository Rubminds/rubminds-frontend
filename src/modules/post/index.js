import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  posts: [],
  singlePost: null,

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
};

//액션 생성함수
export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const loadPost = id => ({
  type: LOAD_POST,
  data: id,
});

//리듀서
const post = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_POSTS:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS: //액션 처리
        draft.posts = [];
        console.log(action.data.data.content);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.posts = draft.posts.concat(action.data.data.content);
        break;
      case LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case LOAD_POST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
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
      default:
        break;
    }
  });
};
export default post;
