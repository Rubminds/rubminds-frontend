import React, { useCallback } from 'react'
import * as S from './style'

const LogInPageRight = () => {
  const onGoogleLogInClick = useCallback(() => {
    window.location.href =
      'https://dev.rubminds.site/oauth2/authorization/google'
  }, [])

  const onKakaoLogInClick = useCallback(() => {
    window.location.href =
      'https://dev.rubminds.site/oauth2/authorization/kakao'
  }, [])
  return (
    <S.LogInPageRight>
      <S.MainTitle fontSize="big" fontWeight="bold">
        Sign In
      </S.MainTitle>
      <S.MainTitle
        margin="topBottom"
        fontSize="middle"
        fontWeight="regular"
      >
        Rubminds 회원으로 다양한 혜택을 누려보세요!
      </S.MainTitle>
      <S.LogInPageInnerRight>
        <S.LogInBox onClick={onGoogleLogInClick}>
          <S.Google></S.Google>
        </S.LogInBox>
        <S.LogInBox bgColor="yellow" onClick={onKakaoLogInClick}>
          <S.KaKaoTalk></S.KaKaoTalk>
        </S.LogInBox>
      </S.LogInPageInnerRight>
      <S.labelWrap>
        <S.MainTitle fontSize="regular">Google 로그인</S.MainTitle>
        <S.MainTitle fontSize="regular">Kakao 로그인</S.MainTitle>
      </S.labelWrap>
    </S.LogInPageRight>
  )
}

export default LogInPageRight
