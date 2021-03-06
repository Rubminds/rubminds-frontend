import React, { useState, useEffect } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { BannerCarousel } from '../..';
import { Iphone } from '../../../assets/imgs';

const Banner = () => {
  const [dibsPosts, setDibsPosts] = useState([]);
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/posts/like?page=1&size=10', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setDibsPosts(response.data.content);
    };
    me && fetchData();
  }, []);
  return (
    <S.LandingBanner>
      <S.BannerTextBox>
        <S.BannerText fontSize="bg">당신의 개발 동료를 찾아 줄</S.BannerText>
        <S.BannerText fontSize="bg">최고의 온라인 커뮤니티</S.BannerText>
        <br />
        <br />
        <S.BannerText fontSize="md">Rubminds에서 당신의 팀원을 찾으세요!</S.BannerText>
        <Link to="/write">
          <S.RecruitBtn>모집하기</S.RecruitBtn>
        </Link>
      </S.BannerTextBox>
      {me && dibsPosts.length !== 0 ? (
        <S.BannerCarouselWrapper>
          <BannerCarousel posts={dibsPosts} />
        </S.BannerCarouselWrapper>
      ) : (
        <S.ImgWrapper>
          <S.IphoneImg src={Iphone}/>

        </S.ImgWrapper>
      )}
    </S.LandingBanner>
  );
};

export default Banner;
