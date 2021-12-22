import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  posts: [],

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
};

//액션 생성함수
export const loadPosts = () => ({
  type: LOAD_POSTS,
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
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.posts = draft.posts.concat(action.data);
        break;
      case LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      default:
        break;
    }
  });
};
export default post;
