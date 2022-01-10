import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  TOGGLE_CHAT_MODAL,
  TOGGLE_CHAT_MODAL_SUCCESS,
  TOGGLE_CHAT_MODAL_ERROR,
  LOAD_USER_INFO,
  LOAD_USER_INFO_SUCCESS,
  LOAD_USER_INFO_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from '../../constants'
import produce from 'immer'

//초기 상태 초기화
export const initialState = {
  me: null,
  isChatOpen: false,

  isSigninLoading: false,
  isSigninDone: false,
  isSigninError: null,

  isSignupLoading: false,
  isSignupDone: false,
  isSignupError: null,

  isUserUpdateLoading: false,
  isUserUpdateDone: false,
  isUserUpdateError: null,

  loadUserInfoLoading: false,
  loadUserInfoDone: false,
  loadUserInfoError: null,

  logoutUserLoading: false,
  logoutUserDone: false,
  logoutUserError: null,
}

export const signinUser = data => ({
  type: SIGNIN_USER,
  data,
})

//액션 생성함수
export const signupUser = data => ({
  type: SIGNUP_USER,
  data,
})

export const updateUser = data => ({
  type: UPDATE_USER,
  data,
})

export const toggleChatModal = () => ({
  type: TOGGLE_CHAT_MODAL,
})

export const loadUserInfo = id => ({
  type: LOAD_USER_INFO,
  data: id,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

//리듀서
const user = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SIGNIN_USER:
        draft.isSigninLoading = true
        draft.isSigninDone = false
        draft.isSigninError = null
        break
      case SIGNIN_USER_SUCCESS:
        console.log('로그인 성공', action.data.data)
        draft.isSigninLoading = false
        draft.isSigninDone = true
        draft.isSigninError = null
        draft.me = action.data.data
        break
      case SIGNIN_USER_ERROR:
        console.log('로그인 실패', action.error)
        draft.isSigninLoading = false
        draft.isSigninError = action.error
        break
      case SIGNUP_USER:
        console.log('signup user')
        draft.isSignupLoading = true
        draft.isSignupDone = false
        draft.isSignupError = null
        break
      case SIGNUP_USER_SUCCESS: //액션 처리
        draft.isSignupLoading = false
        draft.isSignupDone = true
        draft.isSignupError = null
        draft.me = action.data.data
        break
      case SIGNUP_USER_ERROR:
        draft.isSignupLoading = false
        draft.isSignupError = action.error
        break
      case UPDATE_USER:
        console.log('update user')
        draft.isUserUpdateLoading = true
        draft.isUserUpdateDone = false
        draft.isUserUpdateError = null
        break
      case UPDATE_USER_SUCCESS: //액션 처리
        console.log('success',action.data); 
        console.log('UPDATE_USER_SUCCESS');
        draft.isUserUpdateLoading = false
        draft.isUserUpdateDone = true
        draft.isUserUpdateError = null
        draft.me = action.data.data
        break
      case UPDATE_USER_ERROR:
        console.log('update error');
        draft.isUserUpdateLoading = false
        draft.isUserUpdateError = action.error
        break
      case TOGGLE_CHAT_MODAL:
        console.log('toggle chat reducer')
        break
      case TOGGLE_CHAT_MODAL_SUCCESS:
        draft.isChatOpen = !draft.isChatOpen
        break
      case TOGGLE_CHAT_MODAL_ERROR:
        draft.isChatOpen = false
        break
      case LOAD_USER_INFO:
        draft.loadUserInfoLoading = true
        draft.loadUserInfoDone = false
        draft.loadUserInfoError = null
        break
      case LOAD_USER_INFO_SUCCESS:
        draft.loadUserInfoLoading = false
        draft.loadUserInfoDone = true
        break
      case LOAD_USER_INFO_ERROR:
        draft.loadUserInfoLoading = false
        draft.loadUserInfoError = action.error
        break
      case LOGOUT_USER:
        console.log('go')
        draft.logoutUserLoading = true
        draft.logoutUserDone = false
        draft.logoutUserError = null
        draft.me = null
        break
      case LOGOUT_USER_SUCCESS:
        console.log('logout user reducer')
        draft.isSigninLoading = true
        draft.isSigninDone = false
        draft.isSigninError = null
        draft.logoutUserLoading = false
        draft.logoutUserDone = true
        draft.me = null
        break
      case LOGOUT_USER_ERROR:
        draft.logoutUserLoading = false
        draft.logoutUserError = action.error
        break
      default:
        break
    }
  })
}
export default user
