import {
    LOAD_TEAM_MEMBERS,
    LOAD_TEAM_MEMBERS_SUCCESS,
    LOAD_TEAM_MEMBERS_ERROR,
  } from '../../constants';
  import produce from 'immer';
  
  //초기 상태 초기화
  export const initialState = {
  };
  
  //액션 생성함수
  export const loadTeamMembers = (data) => ({
    type: LOAD_TEAM_MEMBERS,
    data, 
  });
  
  //리듀서
  const team = (state = initialState, action) => {
    return produce(state, draft => {
      switch (action.type) {
        case LOAD_TEAM_MEMBERS:
          break;
        case LOAD_TEAM_MEMBERS_SUCCESS: //액션 처리
          console.log(action.data)
          break;
        case LOAD_TEAM_MEMBERS_ERROR:
          break;
        default:
          break;
      }
    });
  };
  export default team;
  