import React, { useCallback } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../../modules/user';

const HeaderModal = ({ me, toggleMenu }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogoutClick = useCallback(() => {
    history.push('/');
    toggleMenu();
    dispatch(logoutUser());
    localStorage.removeItem('accessToken');
  }, [dispatch, history, toggleMenu]);

  const onMypageClick = useCallback(() => {
    toggleMenu();
    history.push(`/userpage/${me.id}`);
  }, [history, me.id, toggleMenu]);

  return (
    <S.HeaderModalWrapper>
      <S.ModalOption onClick={onMypageClick}>마이페이지</S.ModalOption>
      <S.ModalOption onClick={onLogoutClick}>로그아웃</S.ModalOption>
    </S.HeaderModalWrapper>
  );
};

export default HeaderModal;
