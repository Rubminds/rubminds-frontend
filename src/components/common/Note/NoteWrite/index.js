import React, { useCallback } from 'react';
import * as S from './style';

const NoteWrite = ({ user, setStep }) => {
  const onBackClick = useCallback(() => {
    setStep(1);
  }, []);
  return (
    <S.ContentWrapper>
      <S.BackBtn onClick={onBackClick} />
      <S.UserName>{user.name}</S.UserName>
    </S.ContentWrapper>
  );
};

export default NoteWrite;
