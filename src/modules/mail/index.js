import {
  SEND_MAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_ERROR,
  DELETE_MAIL,
  DELETE_MAIL_SUCCESS,
  DELETE_MAIL_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  sendMailLoading: false,
  sendMailDone: false,
  sendMailError: null,

  deleteMailLoading: false,
  deleteMailDone: false,
  deleteMailError: null,
};

export const sendMail = data => ({
  type: SEND_MAIL,
  data,
});

export const deleteMail = data => ({
  type: DELETE_MAIL,
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
      case DELETE_MAIL:
        draft.deleteMailLoading = true;
        draft.deleteMailDone = false;
        draft.deleteMailError = null;
        break;
      case DELETE_MAIL_SUCCESS:
        draft.deleteMailLoading = false;
        draft.deleteMailDone = true;
        draft.deleteMailError = null;
        break;
      case DELETE_MAIL_ERROR:
        draft.deleteMailLoading = false;
        draft.deleteMailError = action.error;
        break;
      default:
        break;
    }
  });
};
export default mail;
