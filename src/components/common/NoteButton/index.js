import React, { useCallback } from 'react';
import * as S from './style';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import { NoteModal } from '../..';
import { toggleNoteModal } from '../../../modules/user';

const NoteButton = () => {
  const dispatch = useDispatch();
  const isChatOpen = useSelector(state => state.user.isChatOpen);
  const onClick = useCallback(() => {
    dispatch(toggleNoteModal());
  }, []);

  return (
    <>
      <S.StyledNoteButton onClick={onClick}>
        <HiOutlineChatAlt2 fontSize="50px" color="#ffffff" />
      </S.StyledNoteButton>
      {isChatOpen && <NoteModal />}
    </>
  );
};

export default NoteButton;
