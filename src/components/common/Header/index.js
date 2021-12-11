import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">Rubminds</Link>
      </S.HeaderContent>
      <S.HeaderContent>
        <Link to="/login">로그인</Link>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default Header
