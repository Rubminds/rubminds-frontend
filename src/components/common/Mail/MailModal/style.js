import styled, { css } from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { BsCircleFill } from 'react-icons/bs';
import { RiMailCloseLine } from 'react-icons/ri';

import { flexBetween, flexCenter, flexColumn } from '../../../../constants';
import { Paper } from '../../..';
import mediaQuery from '../../../../hooks/mediaQuery';

export const MailModalWrapper = styled(Paper)`
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 9999;
  background-color: #fff7d1;
  width: 40rem;
  height: 52rem;
  padding: 2rem 2rem;
  ${flexColumn}
  ${mediaQuery({ width: '100%',height:'60%', bottom: 0, right: 0 })}
`;

export const ModalHeader = styled.div`
  ${flexBetween};
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
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ModalStatus = styled.button`
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-color: rgba(0, 0, 0, 0.2);
  font-weight: bold;
  padding: 1rem 1rem;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
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

export const PostListWrapper = styled.div`
  ${flexColumn};
  overflow-y: auto;
  height: 100%;
  margin-top: 1rem;
  background-color: #fff7d1;
`;


export const UserStatus = styled(BsCircleFill)`
  color: green;
  font-size: 1.4rem;
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
