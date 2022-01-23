import React, { useCallback, useState } from 'react';
import * as S from './style';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { logoutUser, toggleHeaderModal } from '../../../modules/user';
import { HeaderModal } from '../../';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { me, isHeaderModalOpen } = useSelector(state => state.user);

  const onLogoutClick = useCallback(() => {
    console.log('로그아웃 클릭');
    history.push('/');
    dispatch(logoutUser());
    console.log('log out click out');
    localStorage.removeItem('accessToken');
  }, []);

  const toggleMenu = useCallback(() => {
    dispatch(toggleHeaderModal());
  }, []);

  return (
    <S.HeaderWrapper>
      <S.StyledLink to="/">Rubminds</S.StyledLink>
      {me ? (
        <S.UserInfoWrapper>
          <S.UserAvatar src={`https:/${me.avatar}`} onClick={onLogoutClick} />
          <S.UserText>{me.nickname}</S.UserText>
          {isHeaderModalOpen ? (
            <S.UpArrowWrapper>
              <S.UpArrow onClick={toggleMenu} />
              <HeaderModal />
            </S.UpArrowWrapper>
          ) : (
            <S.DownArrow onClick={toggleMenu} />
          )}
        </S.UserInfoWrapper>
      ) : (
        <S.StyledLink to="/login">로그인</S.StyledLink>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
