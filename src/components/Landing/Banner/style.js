import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { flexCenter } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';
import theme from '../../../common/theme';

export const LandingBanner = styled.section`
  height: 48rem;
  width: 100%;
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );
  padding-top: 3rem;
  //padding-top: 90px;
  ${flexCenter};
  align-items: flex-end;
  @media all and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding-top: 5rem;
    align-items: center;
  }
`;

export const BannerTextBox = styled.div`
  ${flexCenter};
  flex-direction: column;
  padding: 0 4rem;
  height: 100%;
  width: 50%;
  ${mediaQuery({ width: '100%' })}
`;

export const BannerText = styled.label`
  font-size: ${props => (props.fontSize === 'bg' ? '3.5rem' : '2rem')};
  color: #ffffff;
  font-weight: bold;
`;

export const RecruitBtn = styled.button`
  margin-top: 3rem;
  border-radius: 50px;
  background: #cdf6e8;
  border: none;
  width: 20rem;
  height: 8rem;
  font-size: 1.75rem;
  font-weight: bold;
  &:hover{
    background:#cde1e9;
  }
  &:active{
    background:${darken(0.1, '#cdf6e8')}
  }
`;

export const ImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${mediaQuery({ width: '100%' })}
`;
export const IphoneImg = styled.img`
  width: 60%;
  min-height: 360px;
  @media all and (max-width: 767px) {
    min-height: initial;
    height: auto;
    margin-top: 5rem;
  }
`;

export const BannerCarouselWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
