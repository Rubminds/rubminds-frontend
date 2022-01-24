import React, { useCallback } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

const MailPost = ({ postId, setChatroomNum }) => {
  const dispatch = useDispatch();

  const onDeleteClick = useCallback(() => {
    setChatroomNum(null);
  }, [setChatroomNum]);

  return (
    <S.ContentWrapper>
      <S.BackBtn onClick={onDeleteClick} />
      <S.Content>
        <S.UserName>보낸이 :</S.UserName>
        <S.Messages></S.Messages>
      </S.Content>
    </S.ContentWrapper>
  );
};

export default MailPost;
