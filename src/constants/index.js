import { css } from 'styled-components';

//css templates
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const POST_STATUS = {
  RECRUIT: '모집중',
  WORKING: '진행중',
  RANKING: '평가중',
  FINISHED: '진행 완료',
};

//skills name-id
export const SKILL_ID = {
  Java: 1,
  Python: 2,
  C: 3,
  'C++': 4,
  Javascript: 5,
  Springboot: 6,
  React: 7,
  Vue: 8,
  NodeJS: 9,
  Aws: 10,
  Docker: 11,
  Html: 12,
  Css: 13,
  Django: 14,
  Flask: 15,
};

//최대 별점
export const MAX_STAR = 5;

//options
// 지역
export const AreaOptions = [
  '서울특별시',
  '경기도',
  '인천광역시',
  '대전광역시',
  '광주광역시',
  '전라북도',
  '전라남도',
  '제주도',
  '경상남도',
  '경상북도',
  '부산광역시',
  '울산광역시',
  '대구광역시',
  '충청남도',
  '충청북도',
  '세종특별자치시',
  '강원도',
];
// 모집 유형
export const RecruitmentType = ['study', 'scout', 'project'];

//actions
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_ERROR = 'SIGNIN_USER_ERROR';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const TOGGLE_MAIL_MODAL = 'TOGGLE_MAIL_MODAL';
export const TOGGLE_MAIL_MODAL_SUCCESS = 'TOGGLE_MAIL_MODAL_SUCCESS';
export const TOGGLE_MAIL_MODAL_ERROR = 'TOGGLE_MAIL_MODAL_ERROR';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export const EDIT_POST = 'EDIT_POST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_ERROR = 'EDIT_POST_ERROR';

export const AUTH_LOAD_POSTS = 'AUTH_LOAD_POSTS';
export const AUTH_LOAD_POSTS_SUCCESS = 'AUTH_LOAD_POSTS_SUCCESS';
export const AUTH_LOAD_POSTS_ERROR = 'AUTH_LOAD_POSTS_ERROR';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_ERROR = 'LOAD_POSTS_ERROR';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_ERROR = 'LOAD_POST_ERROR';

export const LIKE_POST = 'LIKE_POST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_ERROR = 'LIKE_POST_ERROR';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

export const LOAD_USER_INFO = 'LOAD_USER_INFO';
export const LOAD_USER_INFO_SUCCESS = 'LOAD_USER_INFO_SUCCESS';
export const LOAD_USER_INFO_ERROR = 'LOAD_USER_INFO_ERROR';

export const LOAD_TEAM_MEMBERS = 'LOAD_TEAM_MEMBERS';
export const LOAD_TEAM_MEMBERS_SUCCESS = 'LOAD_TEAM_MEMBERS_SUCCESS';
export const LOAD_TEAM_MEMBERS_ERROR = 'LOAD_TEAM_MEMBERS_ERROR';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';

export const LOAD_LIKE_POSTS = 'LOAD_LIKE_POSTS';
export const LOAD_LIKE_POSTS_SUCCESS = 'LOAD_LIKE_POSTS_SUCCESS';
export const LOAD_LIKE_POSTS_ERROR = 'LOAD_LIKE_POSTS_ERROR';

export const SUBMIT_RESULT_POST = 'SUBMIT_RESULT_POST';
export const SUBMIT_RESULT_POST_SUCCESS = 'SUBMIT_RESULT_POST_SUCCESS';
export const SUBMIT_RESULT_POST_ERROR = 'SUBMIT_RESULT_POST_ERROR';

export const EVALUATE_TEAM_MEMBERS = 'EVALUATE_TEAM_MEMBERS';
export const EVALUATE_TEAM_MEMBERS_SUCCESS = 'EVALUATE_TEAM_MEMBERS_SUCCESS';
export const EVALUATE_TEAM_MEMBERS_ERROR = 'EVALUATE_TEAM_MEMBERS_ERROR';

export const ADD_TEAM_USER = 'ADD_TEAM_USER';
export const ADD_TEAM_USER_SUCCESS = 'ADD_TEAM_USER_SUCCESS';
export const ADD_TEAM_USER_ERROR = 'ADD_TEAM_USER_ERROR';

export const CHANGE_POST_STATUS = 'CHANGE_POST_STATUS';
export const CHANGE_POST_STATUS_SUCCESS = 'CHANGE_POST_STATUS_SUCCESS';
export const CHANGE_POST_STATUS_ERROR = 'CHANGE_POST_STATUS_ERROR';

export const DELETE_TEAM_USER = 'DELETE_TEAM_USER';
export const DELETE_TEAM_USER_SUCCESS = 'DELETE_TEAM_USER_SUCCESS';
export const DELETE_TEAM_USER_ERROR = 'DELETE_TEAM_USER_ERROR';

export const SEND_MAIL = 'SEND_MAIL';
export const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS';
export const SEND_MAIL_ERROR = 'SEND_MAIL_ERROR';

export const TOGGLE_HEADER_MODAL = 'TOGGLE_HEADER_MODAL';
export const TOGGLE_HEADER_MODAL_SUCCESS = 'TOGGLE_HEADER_MODAL_SUCCESS';
export const TOGGLE_HEADER_MODAL_ERROR = 'TOGGLE_HEADER_MODAL_ERROR';

export const START_MAIL = 'START_MAIL';
export const START_MAIL_SUCCESS = 'START_MAIL_SUCCESS';
export const START_MAIL_ERROR = 'START_MAIL_ERROR';

export const SET_STEP = 'SET_STEP';
export const SET_STEP_SUCCESS = 'SET_STEP_SUCCESS';
export const SET_STEP_ERROR = 'SET_STEP_ERROR';

export const SET_CHATROOM = 'SET_CHATROOM';
export const SET_CHATROOM_SUCCESS = 'SET_CHATROOM_SUCCESS';
export const SET_CHATROOM_ERROR = 'SET_CHATROOM_ERROR';