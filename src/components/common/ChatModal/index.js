import React, { useCallback } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { toggleChatModal } from '../../../modules/user';
import { Test } from '../../../assets/imgs';

const ChatModal = () => {
  const dispatch = useDispatch();
  const onCloseClick = useCallback(() => {
    dispatch(toggleChatModal());
  }, []);
  return (
    <S.ChatModalWrapper>
      <S.ModalHeader>
        <S.HeaderTitle>Rubminds Contact</S.HeaderTitle>
        <S.CloseButton onClick={onCloseClick} />
      </S.ModalHeader>
      <S.Contents>
        <S.UserListWrapper>
          <S.UserRow>
            <S.UserAvatar src={Test} />
            <S.UserInfo>닉네임</S.UserInfo>
          </S.UserRow>
          <S.UserRow>asd</S.UserRow>
          <S.UserRow>asd</S.UserRow>
        </S.UserListWrapper>
      </S.Contents>
    </S.ChatModalWrapper>
  );
};
export default ChatModal;
