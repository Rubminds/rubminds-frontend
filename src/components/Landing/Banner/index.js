import React from 'react';
import * as S from './style';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

import { BannerCarousel } from '../..';

const Banner = ({posts}) => {
  const {me} = useSelector(state => state.user)
  return (
    <S.LandingBanner>
      <S.BannerTextBox>
        <S.BannerText fontSize="bg">당신의 개발 동료를 찾아 줄</S.BannerText>
        <S.BannerText fontSize="bg">최고의 온라인 커뮤니티</S.BannerText>
        <br />
        <br />
        <S.BannerText fontSize="md">Rubminds에서 당신의 팀원을 찾으세요!</S.BannerText>
        <S.RecruitBtn> <Link to='/write'> 모집하기 </Link> </S.RecruitBtn>
      </S.BannerTextBox>
      {me && posts.length !== 0 ? <BannerCarousel posts={posts}/> : <S.IphoneImg />}
    </S.LandingBanner>
  );
};

export default Banner;
