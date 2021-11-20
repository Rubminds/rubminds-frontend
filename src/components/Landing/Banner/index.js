import React from 'react';
import * as S from './style';
import { useHistory } from 'react-router';

import { BannerCarousel } from '../..';
import { Iphone } from '../../../assets/imgs';

const Banner = () => {
  const me = 'someone'; //로그인 여부
  const history = useHistory();
  return (
    <S.LandingBanner>
      <S.BannerTextBox>
        <S.BannerText fontSize="bg">당신의 개발 동료를 찾아 줄</S.BannerText>
        <S.BannerText fontSize="bg">최고의 온라인 커뮤니티</S.BannerText>
        <br />
        <br />
        <S.BannerText fontSize="md">Rubminds에서 당신의 팀원을 찾으세요!</S.BannerText>
        <S.RecruitBtn
          onClick={() => {
            history.push('/write');
          }}
        >
          모집하기
        </S.RecruitBtn>
      </S.BannerTextBox>
      {me ? <BannerCarousel /> : <S.IphoneImg />}
    </S.LandingBanner>
  );
};

export default Banner;
