import styled from 'styled-components';

import { flexCenter, flexColumn } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';
import theme from '../../../common/theme';
import { Iphone } from '../../../assets/imgs';

export const LandingBanner = styled.section`
  height: 48rem;
  width: 100%;
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );
  padding-top:3rem;
  //padding-top: 90px;
  ${flexCenter};
  align-items:flex-end;
  @media all and (max-width: 767px) {
    flex-direction: column;
    height:auto;
    padding-top:5rem;
    align-items:center;
  }
`;

export const BannerTextBox = styled.div`
  ${flexCenter};
  flex-direction:column;
  padding: 0 4rem;
  height:100%;
  width:50%;
  ${mediaQuery({width:'100%'})}
`;

export const BannerText = styled.label`
  font-size: ${(props) => (props.fontSize === 'bg' ? '3.5rem' : '2rem')};
  color: #ffffff;
  font-weight: bold;

`;

export const RecruitBtn = styled.button`
  margin-top: 3rem;
  border-radius: 50px;
  background-color: #cdf6e8;
  border: none;
  width: 20rem;
  height: 8rem;
  font-size: 1.75rem;
  font-weight: bold;
`;
export const IphoneImg = styled(Iphone)`
  width: 50%;
  height: 100%;
  @media all and (max-width: 767px) {
    height:auto;
    margin-top:5rem;
  }
`;

export const BannerCarouselWrapper = styled.div`
  height:100%;
  display:flex;
  align-items:center;
`
