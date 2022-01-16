import React, { useCallback } from 'react';
import * as S from './style';

const NoteRead = ({ user, setStep }) => {
  const onBackClick = useCallback(() => {
    setStep(1);
  });

  const onResendClick = useCallback(() => {
    setStep(4);
  });
  return (
    <S.ContentWrapper>
      <S.BackBtn onClick={onBackClick} />
      <S.Content>
        <S.UserName>보낸이 : {user.name}</S.UserName>
        <S.Messages>{user.content}</S.Messages>
        <S.ResendBtn onClick={onResendClick}>답장</S.ResendBtn>
      </S.Content>
    </S.ContentWrapper>
  );
};

export default NoteRead;
