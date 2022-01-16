import React, { useCallback } from 'react';
import * as S from './style';

const NoteWrite = ({ user, setStep }) => {
  const onBackClick = useCallback(() => {
    setStep(1);
  }, []);

  const onSendClick = useCallback(() => {
    setStep(1);
  }, []);
  return (
    <S.ContentWrapper>
      <S.BackBtn onClick={onBackClick} />
      <S.Content>
        <S.UserName>받는이 : {user.name}</S.UserName>
        <S.TextArea></S.TextArea>
        <S.SendBtn onClick={onSendClick}>전송</S.SendBtn>
      </S.Content>
    </S.ContentWrapper>
  );
};

export default NoteWrite;
