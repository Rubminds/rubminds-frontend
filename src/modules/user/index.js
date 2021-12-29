import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  TOGGLE_CHAT_MODAL,
  TOGGLE_CHAT_MODAL_SUCCESS,
  TOGGLE_CHAT_MODAL_ERROR,
  LOAD_USER_INFO,
  LOAD_USER_INFO_SUCCESS,
  LOAD_USER_INFO_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  me : null,
  isSigninLoading : false, 
  isSigninDone : false, 
  isSigninError : null, 
  isChatOpen: false,

  loadUserInfoLoading: false,
  loadUserInfoDone: false,
  loadUserInfoError: null,
};

//액션 생성함수
export const signupUser = (data) => ({
  type: SIGNUP_USER,
  data: data, 
});

export const toggleChatModal = () => ({
  type: TOGGLE_CHAT_MODAL,
});

export const loadUserInfo = id => ({
  type: LOAD_USER_INFO,
  data: id,
});

//리듀서
const user = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SIGNUP_USER:
        draft.isSigninLoading = true;
        draft.isSigninDone = false; 
        draft.isSigninError = null; 
        break;
      case SIGNUP_USER_SUCCESS: //액션 처리
        draft.isSigninLoading = false;
        draft.isSigninDone = true; 
        draft.isSigninError = null;
        
        draft.me = action.data.data; 
        break;
      case SIGNUP_USER_ERROR:
        draft.isSigninLoading = false; 
        draft.isSigninError = action.error; 
        break;
      case TOGGLE_CHAT_MODAL:
        break;
      case TOGGLE_CHAT_MODAL_SUCCESS:
        draft.isChatOpen = !draft.isChatOpen;
        break;
      case TOGGLE_CHAT_MODAL_ERROR:
        draft.isChatOpen = false;
        break;
      case LOAD_USER_INFO:
        draft.loadUserInfoLoading = true;
        draft.loadUserInfoDone = false;
        draft.loadUserInfoError = null;
        break;
      case LOAD_USER_INFO_SUCCESS:
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoDone = true;
        break;
      case LOAD_USER_INFO_ERROR:
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoError = action.error;
        break;
      default:
        break;
    }
  });
};
export default user;
