import {
  LOAD_TEAM_MEMBERS,
  LOAD_TEAM_MEMBERS_SUCCESS,
  LOAD_TEAM_MEMBERS_ERROR,
  EVALUATE_TEAM_MEMBERS,
  EVALUATE_TEAM_MEMBERS_SUCCESS,
  EVALUATE_TEAM_MEMBERS_ERROR,
} from '../../constants';
import produce from 'immer';

//초기 상태 초기화
export const initialState = {
  members: [],

  evaluateTeamMembersLoading: false,
  evaluateTeamMembersDone: false,
  evaluateTeamMembersError: null,
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

//리듀서
const team = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_TEAM_MEMBERS:
        draft.members = [];
        break;
      case LOAD_TEAM_MEMBERS_SUCCESS: //액션 처리
        console.log('load team member success', action.data.data);
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
      default:
        break;
    }
  });
};
export default team;
