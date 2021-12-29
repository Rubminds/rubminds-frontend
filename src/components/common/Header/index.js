import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const {me} = useSelector(state => state.user)
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">Rubminds</Link>
      </S.HeaderContent>
      <S.HeaderContent>
        {
          me ? <Link to="/logout">로그아웃</Link>: <Link to="/login">로그인</Link>
        }
        
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default Header
