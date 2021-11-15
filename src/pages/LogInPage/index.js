import React, { useCallback } from 'react'
import * as S from './style'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'

const LogInPage = () => {
  const onGoogleLogInClick = useCallback(() => {
   window.location.href = 'https://dev.rubminds.site/oauth2/authorization/google'; 
  }, [])

  const onKakaoLogInClick = useCallback(()=>{
    window.location.href = 'https://dev.rubminds.site/oauth2/authorization/kakao'
  }, []);

  return (
    <>
      <S.WhiteSpace></S.WhiteSpace>
      <S.LogInPageWrapper>
        <S.LogInPageLeft>
          <S.MainTitle color="white" fontSize="50px">
            당신의 개발 동료를 찾아 줄 최고의 온라인 커뮤니티
          </S.MainTitle>
          <S.MainTitle
            style={{ marginTop: '50px' }}
            color="white"
            fontSize="30px"
          >
            Rubminds에서 당신의 팀원을 찾으세요!
          </S.MainTitle>
        </S.LogInPageLeft>

        <S.LogInPageRight>
          <S.MainTitle color="black" fontSize="50px" fontWeight="bold">
            Sign In
          </S.MainTitle>
          <S.MainTitle
            style={{ marginTop: '50px', marginBottom: '50px' }}
            color="black"
            fontSize="30px"
            fontWeight="regular"
          >
            Rubminds 회원으로 다양한 혜택을 누려보세요!
          </S.MainTitle>
          <S.LogInPageInnerRight>
            <S.LogInBox onClick={onGoogleLogInClick}>
              <FcGoogle size="75" />
            </S.LogInBox>
            <S.LogInBox style={{ backgroundColor: 'yellow' }} onClick={onKakaoLogInClick}>
              <RiKakaoTalkFill size="75" />
            </S.LogInBox>
          </S.LogInPageInnerRight>
          <S.labelWrap>
            <S.loginLabel>Google 로그인</S.loginLabel>
            <S.loginLabel>KakaoTalk 로그인</S.loginLabel>
          </S.labelWrap>
        </S.LogInPageRight>
      </S.LogInPageWrapper>
    </>
  )
}

export default LogInPage
