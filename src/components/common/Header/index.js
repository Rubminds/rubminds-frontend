import React, { useCallback, useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logoutUser } from '../../../modules/user';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { me } = useSelector(state => state.user);

  const onLogoutClick = useCallback(() => {
    console.log('로그아웃 클릭');
    history.push('/');
    dispatch(logoutUser());
    console.log('log out click out');
    localStorage.removeItem('accessToken');
  }, []);

  const OpenMenu = useCallback(()=>{
    dispatch();
  },[])

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">Rubminds</Link>
      </S.HeaderContent>
      {me ? (
        <S.UserInfoWrapper>
          <S.UserAvatar src={`https:/${me.avatar}`} />
          <S.UserText onClick={onLogoutClick}>{me.nickname}</S.UserText>
          <S.DownArrow />
        </S.UserInfoWrapper>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
