import styled from 'styled-components';
import { flexColumn } from '../../../../constants';

export const UserRow = styled.div`
  position: relative;
  ${flexColumn}
  width: 100%;
  color:initial;
  padding: 1rem 1.5rem;
  cursor: pointer;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: calc(100% - 2rem);
    height: 1px;
    margin: 0 1rem;
    -webkit-box-shadow: 0 -1px 0 0 rgb(34 36 38 / 15%);
    box-shadow: 0 -1px 0 0 rgb(34 36 38 / 15%);
  }
`;

export const UserName = styled.label`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2;
  cursor: pointer;
`;

export const LastMessage = styled.label`
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
