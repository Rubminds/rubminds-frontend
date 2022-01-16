import React, { useCallback } from 'react';
import * as S from './style';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { MailModal } from '../../..';
import { toggleMailModal } from '../../../../modules/user';

const MailButton = () => {
  const dispatch = useDispatch();
  const isMailOpen = useSelector(state => state.user.isMailOpen);
  const onClick = useCallback(() => {
    dispatch(toggleMailModal());
  }, []);

  return (
    <>
      <S.StyledMailButton onClick={onClick}>
        <FaRegPaperPlane fontSize="40px" color="#ffffff" />
      </S.StyledMailButton>
      {isMailOpen && <MailModal />}
    </>
  );
};

export default MailButton;
