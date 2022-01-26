import styled from 'styled-components';

import { flexCenter, flexColumn } from '../../../../constants';

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  background-color: #fff;
  ${flexColumn};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ModalLabel = styled.label`
  width: 100%;
  padding: 1rem 1rem;
  font-weight: bold;
  font-size: 2rem;
  ${flexCenter};
  & + & {
    border-top: 1px solid rgb(34 36 38 / 15%);
  }
`;
