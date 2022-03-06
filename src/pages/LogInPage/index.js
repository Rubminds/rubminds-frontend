import React from 'react'
import * as S from './style'
import LogInPageLeft from '../../components/LogInPage/LogInPageLeft'
import LogInPageRight from '../../components/LogInPage/LogInPageRight'

const LogInPage = () => {

  return (
    <S.LogInPageWrapper>
      <LogInPageLeft />
      <LogInPageRight />
    </S.LogInPageWrapper>
  )
}

export default LogInPage
