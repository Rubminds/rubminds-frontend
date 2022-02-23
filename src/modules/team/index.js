import {
  LOAD_TEAM_MEMBERS,
  LOAD_TEAM_MEMBERS_SUCCESS,
  LOAD_TEAM_MEMBERS_ERROR,
  EVALUATE_TEAM_MEMBERS,
  EVALUATE_TEAM_MEMBERS_SUCCESS,
  EVALUATE_TEAM_MEMBERS_ERROR,
  ADD_TEAM_USER,
  ADD_TEAM_USER_SUCCESS,
  ADD_TEAM_USER_ERROR,
  DELETE_TEAM_USER,
  DELETE_TEAM_USER_SUCCESS,
  DELETE_TEAM_USER_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  members: [],

  evaluateTeamMembersLoading: false,
  evaluateTeamMembersDone: false,
  evaluateTeamMembersError: null,

  addTeamUserLoading: false,
  addTeamUserDone: false,
  addTeamUserError: null,

  deleteTeamUserLoading: false,
  deleteTeamUserDone: false,
  deleteTeamUserError: null,
};

//액션 생성함수
export const loadTeamMembers = data => ({
  type: LOAD_TEAM_MEMBERS,
  data,
});

export const evaluateTeamMembers = data => ({
  type: EVALUATE_TEAM_MEMBERS,
  data,
});

export const addTeamUser = data => ({
  type: ADD_TEAM_USER,
  data,
});

export const deleteTeamUser = data => ({
  type: DELETE_TEAM_USER,
  data,
});

//리듀서
const team = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_TEAM_MEMBERS:
        draft.members = [];
        break;
      case LOAD_TEAM_MEMBERS_SUCCESS: //액션 처리
        draft.members = action.data.data.teamUsers;
        break;
      case LOAD_TEAM_MEMBERS_ERROR:
        break;
      case EVALUATE_TEAM_MEMBERS:
        draft.evaluateTeamMembersLoading = true;
        draft.evaluateTeamMembersDone = false;
        draft.evaluateTeamMembersError = null;
        break;
      case EVALUATE_TEAM_MEMBERS_SUCCESS: //액션 처리
        draft.evaluateTeamMembersLoading = false;
        draft.evaluateTeamMembersDone = true;
        draft.evaluateTeamMembersError = null;
        break;
      case EVALUATE_TEAM_MEMBERS_ERROR:
        draft.evaluateTeamMembersLoading = false;
        draft.evaluateTeamMembersError = action.error;
        break;
      case ADD_TEAM_USER:
        draft.addTeamUserLoading = true;
        draft.addTeamUserDone = false;
        draft.addTeamUserError = null;
        break;
      case ADD_TEAM_USER_SUCCESS: //액션 처리
        draft.addTeamUserLoading = false;
        draft.addTeamUserDone = true;
        draft.addTeamUserError = null;
        break;
      case ADD_TEAM_USER_ERROR:
        draft.addTeamUserLoading = false;
        draft.addTeamUserError = action.error;
        break;
      case DELETE_TEAM_USER:
        draft.deleteTeamUserLoading = true;
        draft.deleteTeamUserDone = false;
        draft.deleteTeamUserError = null;
        break;
      case DELETE_TEAM_USER_SUCCESS: //액션 처리
        draft.deleteTeamUserLoading = false;
        draft.deleteTeamUserDone = true;
        draft.deleteTeamUserError = null;
        break;
      case DELETE_TEAM_USER_ERROR:
        draft.deleteTeamUserLoading = false;
        draft.deleteTeamUserError = action.error;
        break;
      default:
        break;
    }
  });
};
export default team;
