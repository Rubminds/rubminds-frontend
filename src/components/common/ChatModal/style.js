import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

import { flexBetween, flexColumn } from '../../../constants';
import { Paper } from '../../';
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
  ${mediaQuery({ width: '100%', height: '80%', bottom: '5%', right: 0 })}
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
    width: calc(100% - 4rem);
    height: 1px;
    margin: 0 1rem;
    -webkit-box-shadow: 0 -1px 0 0 rgb(34 36 38 / 15%);
    box-shadow: 0 -1px 0 0 rgb(34 36 38 / 15%);
  }
`;

export const UserAvatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  flex: 1;
`;

export const UserInfo = styled.div`
  flex: 8;
  font-size: 2rem;
`;

// 여기부터 다시 구현
export const ChatroomWrapper = styled.div`
  ${flexColumn};
  padding:1rem 1rem;
`;

export const ChatroomHeader = styled.div`
  flex: 1;
`;

export const ChatroomBody = styled.div`
  flex: 6;
`;

export const ChatroomSend = styled.div`
  flex: 1;
`;
