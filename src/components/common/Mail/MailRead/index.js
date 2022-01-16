import React, { useCallback } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { deleteMail } from '../../../../modules/mail';

const MailRead = ({ user, setStep }) => {
  const dispatch = useDispatch();

  const onBackClick = useCallback(() => {
    setStep(1);
  });

  const onResendClick = useCallback(() => {
    setStep(4);
  });

  const onDeleteClick = useCallback(() => {
    //dispatch(deleteMail());
  }, []);
  return (
    <S.ContentWrapper>
      <S.BackBtn onClick={onBackClick} />
      <S.Content>
        <S.UserName>보낸이 : {user.name}</S.UserName>
        <S.Messages>{user.content}</S.Messages>
        <S.BtnWrapper>
          <S.ResendBtn onClick={onResendClick}>답장</S.ResendBtn>
          <S.DeleteBtn onClick={onDeleteClick}>삭제</S.DeleteBtn>
        </S.BtnWrapper>
      </S.Content>
    </S.ContentWrapper>
  );
};

export default MailRead;
