import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../../constants';

export const UserListWrapper = styled.div`
  position: relative;
  padding: 2% 2%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  border: none;
  background-color: inherit;
`;

export const UserList = styled.ul`
  ${flexColumn};
`;

export const User = styled.li`
  padding: 5%;
  display: flex;
  align-items: center;
  & + & {
    border-top: 1px solid rgba(128, 128, 128, 0.199);
  }
  font-size:14px;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
