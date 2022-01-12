import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {AiFillCrown} from 'react-icons/ai'
import { flexCenter, flexColumn } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';

export const UserListWrapper = styled.div`
  position: relative;
  padding: 2% 2%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 5px;
  ${mediaQuery({ width: '100%' })};
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

export const User = styled(Link)`
  padding: 5%;
  display: flex;
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
  cursor:pointer;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export const WriterMark = styled(AiFillCrown)`
color:red;
`

export const AddUserInput = styled.input`
  width:100%;
`