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

//최대 별점
export const MAX_STAR=5;

//options
//dropdown
export const LandingDropdownOptions = [
  '파이썬',
  '리액트',
  '자바',
  '자바스크립트',
  'NODEJS',
  '엄청긴거테스트용ㅇㅇㅇㅇ',
];
// 지역 options
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
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';

export const TOGGLE_CHAT_MODAL = 'TOGGLE_CHAT_MODAL';
export const TOGGLE_CHAT_MODAL_SUCCESS = 'TOGGLE_CHAT_MODAL_SUCCESS';
export const TOGGLE_CHAT_MODAL_ERROR = 'TOGGLE_CHAT_MODAL_ERROR';