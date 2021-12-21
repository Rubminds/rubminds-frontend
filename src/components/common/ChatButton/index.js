import React, { useCallback } from 'react';
import * as S from './style';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { useDispatch, useSelector} from 'react-redux';

import { ChatModal } from '../../';
import { toggleChatModal } from '../../../modules/user';

const ChatButton = () => {
  const dispatch = useDispatch();
  const isChatOpen = useSelector((state) => state.user.isChatOpen);
  const onClick = useCallback(() => {
    dispatch(toggleChatModal());
  }, []);

  return (
    <>
      <S.StyledChatButton onClick={onClick}>
        <HiOutlineChatAlt2 fontSize="50px" color="#ffffff" />
      </S.StyledChatButton>
      {
        isChatOpen && <ChatModal/>
      }
    </>
  );
};

export default ChatButton;
