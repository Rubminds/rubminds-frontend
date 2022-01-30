import styled from 'styled-components';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { flexCenter, flexColumn } from '../../../../constants';
import { Avatar } from '../../../';
import mediaQuery from '../../../../hooks/mediaQuery';

export const BackBtn = styled(MdOutlineArrowBackIos)`
  font-size: 2rem;
  cursor: pointer;
`;

export const PostTitle = styled.label`
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  flex-shrink: 0;
  margin-top: 1rem;
`;

export const Content = styled.div`
  height: 100%;
  margin-top: 1rem;
  background-color: #fff8;
  font-size: 1.6rem;
  padding: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.199);
  border-radius: 10px;
  overflow-y: auto;
  flex: 1 1 auto;
`;

export const MessageRow = styled.div`
  ${flexColumn}
  width:100%;
  & + & {
    border-top: 1px solid rgba(128, 128, 128, 0.199);
  }
  padding: 1rem 0;
`;

export const UserAvatar = styled(Avatar)`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const InfoWrapper = styled.div`
  ${flexColumn}
  flex:1;
  margin-left: 1rem;
`;

export const Nickname = styled.label`
  font-weight: bold;
  cursor: pointer;
  width:fit-content;
`;

export const Msg = styled.label``;

export const SendTime = styled.label`
  font-size: 1.2rem;
`;

export const InputWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  height: 4rem;
  flex-shrink: 0;
`;

export const Input = styled.input`
  height: 4rem;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 1rem;
  width: 100%;
`;

export const SendBtn = styled.button`
  ${flexCenter}
  font-size: 3rem;
  height: 4rem;
  width: 4rem;
  padding: 0.5rem 0.5rem;
  background-color: #fff;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid rgba(128, 128, 128, 0.199);
  cursor: pointer;
`;
