import {
  CREATE_POSTS, 
  CREATE_POSTS_SUCCESS, 
  CREATE_POSTS_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  posts: [],
  singlePost: null,

  createpostLoading : false,
  createpostDone : false, 
  createpostError : null, 

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,

  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
};

//액션 생성함수

export const createPosts = (data) => ({
  type : CREATE_POSTS, 
  data, 
})

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const loadPost = id => ({
  type: LOAD_POST,
  data: id,
});

export const likePost = id => ({
  type: LIKE_POST,
  data: id,
});

//리듀서
const post = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_POSTS :
        draft.createpostLoading = true; 
        draft.createpostDone = false; 
        draft.createpostError = null; 
        break; 
      case CREATE_POSTS_SUCCESS :
        draft.createpostLoading = false; 
        draft.createpostDone = true; 
        draft.createpostError = null; 
        break;
      case CREATE_POSTS_ERROR :
        draft.createpostLoading = false;
        draft.createpostError = action.error;  
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
      case LIKE_POST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS: //액션 처리
        console.log('like success');
        draft.likePostLoading = false;
        draft.likePostDone = true;
        draft.singlePost = action.data.data;
        break;
      case LIKE_POST_ERROR:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      default:
        break;
    }
  });
};
export default post;
