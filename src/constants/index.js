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

//dropdown options
export const LandingDropdownOptions = [
  '파이썬',
  '리액트',
  '자바',
  '자바스크립트',
  'NODEJS',
  '엄청긴거테스트용ㅇㅇㅇㅇ',
];

//actions
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';
