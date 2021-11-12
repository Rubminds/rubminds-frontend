import React, { useCallback } from 'react';
import * as S from './style';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
const ChatButton = () => {
  const onClick = useCallback(() => {
    //채팅버튼 클릭이벤트
  }, []);

  return (
    <S.StyledChatButton onClick={onClick}>
      <HiOutlineChatAlt2 fontSize="100px" color="#ffffff" />
    </S.StyledChatButton>
  );
};

export default ChatButton;
