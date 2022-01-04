import React, {useCallback} from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logoutUser } from '../../../modules/user'

const Header = () => {

  const dispatch = useDispatch();
  const {me} = useSelector(state => state.user)
  const onLogoutClick = useCallback(()=>{
    console.log('로그아웃 클릭'); 
    localStorage.removeItem('accessToken');
    dispatch(logoutUser())
  },[])
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">Rubminds</Link>
      </S.HeaderContent>
      <S.HeaderContent>
        {
          me ? <S.LogoutText onClick={onLogoutClick}>로그아웃</S.LogoutText>: <Link to="/login">로그인</Link>
        }
        
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default Header
