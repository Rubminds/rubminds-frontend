import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillCrown } from 'react-icons/ai';
import { CgCloseO } from 'react-icons/cg';

import { flexCenter, flexColumn } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';

export const UserListWrapper = styled.div`
  position: relative;
  padding: 3rem 1rem 1rem 1rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 5px;
  ${mediaQuery({ width: '100%' })};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: inherit;
`;

export const UserList = styled.ul`
  ${flexColumn};
`;

export const User = styled(Link)`
  position: relative;
  padding: 5%;
  display: flex;
  width:fit-content;
  align-items: center;
  & + & {
    border-top: 1px solid rgba(128, 128, 128, 0.199);
  }
  font-size: 14px;
  font-weight: bold;
`;

export const AddMember = styled.label`
  padding: 5%;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(128, 128, 128, 0.199);
  font-size: 14px;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export const WriterMark = styled(AiFillCrown)`
  color: red;
`;

export const AddUserInput = styled.input`
  width: 100%;
`;

export const DeleteUserButton = styled(CgCloseO)`
  position:absolute;
  transform:translate(-50%, -50%);
  top:50%;
  right:5%;
  z-index:999;
`