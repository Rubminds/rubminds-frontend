import React, { useCallback, useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logoutUser, toggleHeaderModal } from '../../../modules/user';
import {HeaderModal} from '../../'

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

  const toggleMenu = useCallback(()=>{
    dispatch(toggleHeaderModal());
  },[])

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">Rubminds</Link>
      </S.HeaderContent>
      {me ? (
        <S.UserInfoWrapper>
          <S.UserAvatar src={`https:/${me.avatar}`} />
          <S.UserText>{me.nickname}</S.UserText>
          {isHeaderModalOpen ? <S.UpArrow onClick={toggleMenu}/> : <S.DownArrow onClick={toggleMenu}/>}
        </S.UserInfoWrapper>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
