import styled, { css } from 'styled-components';

import { flexCenter, flexColumn } from '../../../../constants';

export const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #fff;
  ${flexColumn};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  ${props =>
    props.postlist
      ? css`
          top:0;
          height:100%;
          padding:2rem 2rem;
          background-color:#fff7d1;
        `
      : css`
            bottom: 0;
        `}
`;

export const ModalLabel = styled.label`
  width: 100%;
  padding: 1rem 1rem;
  font-weight: bold;
  font-size: 2rem;
  height: 6rem;
  cursor: pointer;
  ${flexCenter};
  & + & {
    border-top: 1px solid rgb(34 36 38 / 15%);
  }
  &:hover {
    background-color: rgb(34 36 38 / 15%);
  }
`;
