import React, { useCallback, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { toggleChatModal } from '../../../modules/user';
import { Test } from '../../../assets/imgs';

const ChatModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(2);
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
              <S.UserAvatar src={Test} onClick={() => setStep(2)} />
              <S.UserInfo>
                <S.UserName onClick={() => setStep(2)}>닉네임</S.UserName>
                <S.LastMessage>
                  이 공간에 마지막으로 쓴 말이 나올건데 너무 길면 한 줄에서 ...으로 풀어나갈 것
                </S.LastMessage>
              </S.UserInfo>
              <S.NoticeNumber>99</S.NoticeNumber>
            </S.UserRow>
            <S.UserRow>asd</S.UserRow>
            <S.UserRow>asd</S.UserRow>
          </S.UserListWrapper>
        ) : (
          <S.ChatroomWrapper>
            <S.ChatroomHeader>
              <S.HeaderBackBtn onClick={() => setStep(1)} />
              <S.HeaderAvatar src={Test} />
              <S.HeaderUser>
                김경원
                <br />
                <S.UserStatus />
                현재접속중
              </S.HeaderUser>
            </S.ChatroomHeader>
            <S.ChatroomBody>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
              <S.MessageWrapper>
                <S.MessageAvatar src={Test} />
                <S.MessageText>dasdasdasdasdddddddddddddddddddddddddsd</S.MessageText>
              </S.MessageWrapper>
            </S.ChatroomBody>
            <S.ChatInputWrapper>
              <S.ChatroomInput placeholder={'메시지를 입력해주세요.'} />
              <S.sendBtn />
            </S.ChatInputWrapper>
          </S.ChatroomWrapper>
        )}
      </S.Contents>
    </S.ChatModalWrapper>
  );
};
export default ChatModal;
