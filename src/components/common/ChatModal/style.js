import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import {BsCircleFill} from 'react-icons/bs'

import { flexBetween, flexCenter, flexColumn } from '../../../constants';
import { Paper, Avatar, TextArea } from '../../';
import mediaQuery from '../../../hooks/mediaQuery';

export const ChatModalWrapper = styled(Paper)`
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 9999;
  background-color: #aa8ae8;
  width: 45rem;
  height: 60rem;
  padding: 2rem 2rem;
  ${mediaQuery({ width: '100%', height: '80%', bottom: 0, right: 0 })}
`;

export const ModalHeader = styled.div`
  ${flexBetween};
  padding: 0 1rem;
`;

export const HeaderTitle = styled.label`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;

export const CloseButton = styled(GrClose)`
  font-size: 2rem;
  cursor: pointer;
`;

export const Contents = styled(Paper)`
  width: 100%;
  height: 95%;
  margin-top: 1rem;
`;

export const UserListWrapper = styled.div`
  ${flexColumn};
`;

export const UserRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 1rem;
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

export const UserAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
  cursor:pointer;
`;

export const UserInfo = styled.div`
  flex: 6;
  padding: 0 1rem;
  ${flexColumn}
  width:60%;
`;

export const UserName = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2;
  cursor:pointer;
`;

export const LastMessage = styled.label`
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoticeNumber = styled.label`
  ${flexCenter}
  width:3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.2rem;
  background-color: red;
  color: white;
  font-weight: bold;
`;

export const ChatroomWrapper = styled.div`
  ${flexColumn};
  padding: 1rem 1rem;
  height: 100%;
`;

export const ChatroomHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(34 36 38 / 15%);
  display: flex;
  align-items: center;
  flex: 1;
`;

export const HeaderBackBtn = styled(MdOutlineArrowBackIos)`
  font-size: 3rem;
  color: #707070;
  cursor:pointer;
  ${mediaQuery({ 'font-size': '4rem' })}
`;

export const HeaderAvatar = styled(Avatar)`
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
  cursor:pointer;
  ${mediaQuery({ width: '6rem', height: '6rem' })}
`;

export const HeaderUser = styled.label`
  margin-left: 1rem;
  font-size: 1.4rem;
  color: #707070;
  line-height:1.5;
`;

export const UserStatus = styled(BsCircleFill)`
  color: green;
  font-size:1.4rem;
`;

export const ChatroomBody = styled.div`
  height: 100%;
  width: 100%;
  flex: 8;
`;

export const ChatInputWrapper = styled(Paper)`
  ${flexBetween}
  border-radius: 30px;
  flex: 1;
  padding: 0 1rem;
`;

export const ChatroomInput = styled(TextArea)`
  width: 100%;
  height: 100%;
  min-height: initial;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
  padding: 0;
`;

export const sendBtn = styled(RiSendPlaneFill)`
  font-size: 2.5rem;
  ${mediaQuery({ 'font-size': '4rem' })}
  cursor:pointer;
`;
