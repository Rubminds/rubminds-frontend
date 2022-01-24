import styled, { css } from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsCircleFill, BsChatLeft } from 'react-icons/bs';
import { RiMailCloseLine } from 'react-icons/ri';

import { flexBetween, flexCenter, flexColumn } from '../../../../constants';
import { Paper, Avatar, Input } from '../../..';
import mediaQuery from '../../../../hooks/mediaQuery';

export const MailModalWrapper = styled(Paper)`
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 9999;
  background-color: #fff7d1;
  width: 40rem;
  height: 60rem;
  padding: 2rem 2rem;
  ${flexColumn}
  ${mediaQuery({ width: '100%', height: '60%', bottom: 0, right: 0 })}
`;

export const ModalHeader = styled.div`
  ${flexBetween};
  padding: 0 1rem;
`;

export const HeaderTitle = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;

export const CloseButton = styled(GrClose)`
  font-size: 2rem;
  cursor: pointer;
`;

export const ModalStatusWrapper = styled.div`
  margin-top: 2rem;
  width:100%;
  display:flex;
  justify-content:space-around;
`;

export const ModalStatus = styled.button`
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-color: rgba(0, 0, 0, 0.2);
  font-weight: bold;
  padding: 1rem 1rem;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.1);
  width:100%;
  ${props =>
    props.current === props.value
      ? css`
          background-color: #fff7d1;
          padding-top: 1.5rem;
        `
      : css`
          background-color: #fff;
          &:hover {
            padding-top: 1.5rem;
          }
        `}
`;

export const UserListWrapper = styled.div`
  ${flexColumn};
  overflow-y: auto;
  height: 100%;
  margin-top: 1rem;
  background-color: #fff7d1;
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
  cursor: pointer;
  ${mediaQuery({ 'font-size': '4rem' })}
`;

export const HeaderAvatar = styled(Avatar)`
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
  cursor: pointer;
  ${mediaQuery({ width: '6rem', height: '6rem' })}
`;

export const HeaderUser = styled.label`
  margin-left: 1rem;
  font-size: 1.4rem;
  color: #707070;
  line-height: 1.5;
`;

export const UserStatus = styled(BsCircleFill)`
  color: green;
  font-size: 1.4rem;
`;

export const ChatroomBody = styled.div`
  height: 100%;
  width: 100%;
  flex: 8;
  overflow-y: auto;
  padding: 1rem 0;
`;

export const ChatInputWrapper = styled(Paper)`
  ${flexBetween}
  border-radius: 30px;
  flex: 1;
  padding: 0 1rem;
`;

export const ChatroomInput = styled(Input)`
  width: 100%;
  height: 100%;
  min-height: initial;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
  padding: 0 1rem;
`;

export const sendBtn = styled(RiSendPlaneFill)`
  font-size: 2.5rem;
  ${mediaQuery({ 'font-size': '4rem' })}
  cursor:pointer;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5rem;
`;

export const MessageAvatar = styled(HeaderAvatar)`
  margin-right: 1rem;
  ${mediaQuery({ 'margin-right': '2rem' })}
`;

export const MessageText = styled.div`
  position: relative;
  display: flex;
  max-width: 70%;
  padding: 1rem 1rem;
  background: #f9f871;
  border-radius: 10px;
  white-space: normal;
  word-break: break-all;
  line-height: 1.5;
  font-size: 1.2rem;
  &:after {
    border-color: transparent #f9f871 transparent transparent;
    border-style: solid;
    border-width: 5px;
    content: '';
    display: block;
    left: -9px;
    position: absolute;
    bottom: 10px;
    width: 0;
  }
`;

export const DisabledForm = styled.div`
  height: 100%;
  ${flexCenter}
  flex-direction:column;
`;

export const DisabledIcon = styled(RiMailCloseLine)`
  font-size: 10rem;
  color: #707070;
`;

export const DisabledLabel = styled.label`
  font-size: 3rem;
  color: #707070;
`;
