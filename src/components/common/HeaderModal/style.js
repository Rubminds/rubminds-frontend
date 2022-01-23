import styled from 'styled-components';

import { flexColumn, flexCenter } from '../../../constants';

export const HeaderModalWrapper = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  width: 100px;
  background-color: #fff;
  color: initial;
  padding: 4px 0;
  margin-top: 2px;
  z-index: 100;
  border-radius: 8px;
  ${flexColumn};
`;

export const ModalOption = styled.li`
  width: 100%;
  font-size: 1.2rem;
  padding: 8px 4px;
  font-weight:initial;
  ${flexCenter};
  & + & {
    border-top: 1px solid rgba(128,128,128,0.199)
  }
  &:hover {
    font-weight: bold;
  }
`;
