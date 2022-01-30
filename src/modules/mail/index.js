import {
  SEND_MAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_ERROR,
  START_MAIL,
  START_MAIL_SUCCESS,
  START_MAIL_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  sendMailLoading: false,
  sendMailDone: false,
  sendMailError: null,

  startMailLoading: false,
  startMailDone: false,
  startMailError: null,
};

export const sendMail = data => ({
  type: SEND_MAIL,
  data,
});

export const startMail = data => ({
  type: START_MAIL,
  data,
});

//리듀서
const mail = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SEND_MAIL:
        draft.sendMailLoading = true;
        draft.sendMailDone = false;
        draft.sendMailError = null;
        break;
      case SEND_MAIL_SUCCESS:
        draft.sendMailLoading = false;
        draft.sendMailDone = true;
        draft.sendMailError = null;
        break;
      case SEND_MAIL_ERROR:
        draft.sendMailLoading = false;
        draft.sendMailError = action.error;
        break;
      case START_MAIL:
        draft.startMailLoading = true;
        draft.startMailDone = false;
        draft.startMailError = null;
        break;
      case START_MAIL_SUCCESS:
        draft.startMailLoading = false;
        draft.startMailDone = true;
        draft.startMailError = null;
        break;
      case START_MAIL_ERROR:
        draft.startMailLoading = false;
        draft.startMailError = action.error;
        break;
      default:
        break;
    }
  });
};
export default mail;
