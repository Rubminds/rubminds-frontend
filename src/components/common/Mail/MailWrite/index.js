import React, { useCallback } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { sendMail } from '../../../../modules/mail';

const MailWrite = ({ user, setStep }) => {
  const dispatch = useDispatch();

  const onBackClick = useCallback(() => {
    setStep(1);
  }, []);

  const onSendClick = useCallback(() => {
    setStep(1);
    //dispatch(sendMail());
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

export default MailWrite;
