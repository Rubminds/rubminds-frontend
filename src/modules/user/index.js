import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_ERROR } from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  accessToken : null,
};

//액션 생성함수
export const signupUser = () => ({
  type: SIGNUP_USER,
});

//리듀서
const user = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGNUP_USER:
        break;
      case SIGNUP_USER_SUCCESS: //액션 처리
        //draft.id = action.data;
        console.log('success');
        break;
      case SIGNUP_USER_ERROR:
        break;
      default:
        break;
    }
  });
};
export default user;
