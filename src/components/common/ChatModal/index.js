import React, { useCallback } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { toggleChatModal } from '../../../modules/user';

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
          
      </S.Contents>
    </S.ChatModalWrapper>
  );
};
export default ChatModal;
