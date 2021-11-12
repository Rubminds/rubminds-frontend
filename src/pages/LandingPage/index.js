import React from 'react';
import * as S from './style';

import { Iphone } from '../../assets/imgs';

const LandingPage = () => {
  return (
    <>
      <S.LandingWrapper>
        <S.LandingBanner>
          <S.BannerTextBox>
            <S.BannerText fontSize="50px">당신의 개발 동료를 찾아 줄</S.BannerText>
            <S.BannerText fontSize="50px">최고의 온라인 커뮤니티</S.BannerText>
            <br/><br/>
            <S.BannerText fontSize="30px">Rubminds에서 당신의 팀원을 찾으세요!</S.BannerText>
            <S.RecruitBtn>모집하기</S.RecruitBtn>
          </S.BannerTextBox>
          <Iphone width="600px" height="100%"/>
        </S.LandingBanner>
      </S.LandingWrapper>
    </>
  );
};

export default LandingPage;
