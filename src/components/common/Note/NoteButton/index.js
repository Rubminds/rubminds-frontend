import React, { useCallback } from 'react';
import * as S from './style';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { NoteModal } from '../../..';
import { toggleNoteModal } from '../../../../modules/user';

const NoteButton = () => {
  const dispatch = useDispatch();
  const isNoteOpen = useSelector(state => state.user.isNoteOpen);
  const onClick = useCallback(() => {
    dispatch(toggleNoteModal());
  }, []);

  return (
    <>
      <S.StyledNoteButton onClick={onClick}>
        <FaRegPaperPlane fontSize="40px" color="#ffffff" />
      </S.StyledNoteButton>
      {isNoteOpen && <NoteModal />}
    </>
  );
};

export default NoteButton;
