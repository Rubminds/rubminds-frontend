import React, { useCallback } from 'react';
import * as S from './style';
import { useSelector, useDispatch } from 'react-redux';

import {  toggleHeaderModal } from '../../../modules/user';
import { HeaderModal } from '../../';

const Header = () => {
  const dispatch = useDispatch();
  const { me, isHeaderModalOpen } = useSelector(state => state.user);

  const toggleMenu = useCallback(() => {
    dispatch(toggleHeaderModal());
  }, [dispatch]);

  return (
    <S.HeaderWrapper>
      <S.StyledLink to="/">Rubminds</S.StyledLink>
      {me ? (
        <S.UserInfoWrapper>
          <S.LinkWrapper to={`/userpage/${me.id}`}><S.UserAvatar src={`https:/${me.avatar}`}/></S.LinkWrapper>
          <S.UserText>{me.nickname}</S.UserText>
          {isHeaderModalOpen ? (
            <S.UpArrowWrapper>
              <S.UpArrow onClick={toggleMenu} />
              <HeaderModal me={me} toggleMenu={toggleMenu} />
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
