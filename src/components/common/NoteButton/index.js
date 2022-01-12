import React, { useCallback } from 'react';
import * as S from './style';
import { FaRegPaperPlane } from 'react-icons/fa';
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
        <FaRegPaperPlane fontSize="40px" color="#ffffff" />
      </S.StyledNoteButton>
      {isChatOpen && <NoteModal />}
    </>
  );
};

export default NoteButton;
