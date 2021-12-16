import React, { useCallback } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { toggleChatModal } from '../../../modules/user';
import { Test } from '../../../assets/imgs';

const ChatModal = () => {
  const dispatch = useDispatch();
  const step = 2;
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
        {step === 1 ? (
          <S.UserListWrapper>
            <S.UserRow>
              <S.UserAvatar src={Test} />
              <S.UserInfo>
                <S.UserName>닉네임</S.UserName>
                <S.LastMessage>이 공간에 마지막으로 쓴 말이 나올건데 너무 길면 한 줄에서 ...으로 풀어나갈 것</S.LastMessage>
              </S.UserInfo>
              <S.NoticeNumber>99</S.NoticeNumber>
            </S.UserRow>
            <S.UserRow>asd</S.UserRow>
            <S.UserRow>asd</S.UserRow>
          </S.UserListWrapper>
        ) : (
          <S.ChatroomWrapper></S.ChatroomWrapper>
        )}
      </S.Contents>
    </S.ChatModalWrapper>
  );
};
export default ChatModal;
