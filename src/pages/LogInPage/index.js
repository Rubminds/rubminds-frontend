import React, { useCallback } from 'react'
import * as S from './style'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'

const LogInPage = () => {
  const onGoogleLogInClick = useCallback(() => {
    window.location.href =
      'https://dev.rubminds.site/oauth2/authorization/google'
  }, [])

  const onKakaoLogInClick = useCallback(() => {
    window.location.href =
      'https://dev.rubminds.site/oauth2/authorization/kakao'
  }, [])

  return (
    <>
      <S.LogInPageLeft>
        <S.LeftMainTextWrapper>
          <S.MainTitle color="white" fontSize="big">
            당신의 개발 동료를 찾아줄
          </S.MainTitle>
          <S.MainTitle color="white" fontSize="big">
            최고의 온라인 커뮤니티
          </S.MainTitle>
          <S.MainTitle margin="top" color="white" fontSize="middle">
            Rubminds에서 당신의 팀원을 찾으세요!
          </S.MainTitle>
        </S.LeftMainTextWrapper>
      </S.LogInPageLeft>

      <S.LogInPageRight>
        <S.MainTitle color="black" fontSize="big" fontWeight="bold">
          Sign In
        </S.MainTitle>
        <S.MainTitle
          margin="topBottom"
          color="black"
          fontSize="middle"
          fontWeight="regular"
        >
          Rubminds 회원으로 다양한 혜택을 누려보세요!
        </S.MainTitle>
        <S.LogInPageInnerRight>
          <S.LogInBox onClick={onGoogleLogInClick}>
            <S.Google></S.Google>
          </S.LogInBox>
          <S.LogInBox
            style={{ backgroundColor: 'yellow' }}
            onClick={onKakaoLogInClick}
          >
            <S.KaKaoTalk></S.KaKaoTalk>
          </S.LogInBox>
        </S.LogInPageInnerRight>
        <S.labelWrap>
          <S.MainTitle fontSize="regular">Google 로그인</S.MainTitle>
          <S.MainTitle fontSize="regular">KakaoTalk 로그인</S.MainTitle>
        </S.labelWrap>
      </S.LogInPageRight>
    </>
  )
}

export default LogInPage
