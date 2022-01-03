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

  loadUserInfoLoading: false,
  loadUserInfoDone: false,
  loadUserInfoError: null,

  logoutUserLoading: false,
  logoutUserDone: false,
  logoutUserError: null,
}

//액션 생성함수
export const signupUser = data => ({
  type: SIGNUP_USER,
  data: data,
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
      case SIGNUP_USER:
        console.log('signup user')
        draft.isSigninLoading = true
        draft.isSigninDone = false
        draft.isSigninError = null
        break
      case SIGNUP_USER_SUCCESS: //액션 처리
        draft.isSigninLoading = false
        console.log('signup user success')
        draft.isSigninDone = true
        draft.isSigninError = null
        draft.me = action.data.data
        break
      case SIGNUP_USER_ERROR:
        draft.isSigninLoading = false
        draft.isSigninError = action.error
        break
      case TOGGLE_CHAT_MODAL:
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
        draft.logoutUserLoading = true
        draft.logoutUserDone = false
        draft.logoutUserError = null
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
