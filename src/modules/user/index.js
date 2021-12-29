import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  TOGGLE_CHAT_MODAL,
  TOGGLE_CHAT_MODAL_SUCCESS,
  TOGGLE_CHAT_MODAL_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  id : null, 
  nickname: null, 
  avatar : null, 
  accessToken: null,
  isLoggingIn : false, 
  // isChatOpen: false,
};

//액션 생성함수
export const signupUser = (data) => ({
  type: SIGNUP_USER,
  data: data, 
});

export const toggleChatModal = () => ({
  type:TOGGLE_CHAT_MODAL,
})

//리듀서
const user = (state = initialState, action) => {
  console.log('리듀서',action); 
  return produce(state, draft => {
    switch (action.type) {
      case SIGNUP_USER:
        draft.isLoggingIn = true;
        break;
      case SIGNUP_USER_SUCCESS: //액션 처리
        console.log('action.data',action.data.data.id); 
        draft.id = action.data.data.id;  
        draft.isLoggingIn = false;
        draft.avatar = '123'; 
        console.log('redux-initial-state', initialState); 
        break;
      case SIGNUP_USER_ERROR:
        break;
      case TOGGLE_CHAT_MODAL:
        break;
      case TOGGLE_CHAT_MODAL_SUCCESS:
        draft.isChatOpen = !draft.isChatOpen;
        break;
      case TOGGLE_CHAT_MODAL_ERROR:
        draft.isChatOpen = false;
        break;
      default:
        break;
    }
  });
};
export default user;
