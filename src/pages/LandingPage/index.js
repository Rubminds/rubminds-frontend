import React from 'react';
import * as S from './style';

import {Banner} from '../../components'
const LandingPage = () => {
  return (
    <>
      <S.LandingWrapper>
        <Banner/>
        <S.LandingDetailWrapper>
          <S.TitleWrapper>
            <S.DetailTitle>
              어떤 동료를 찾으시나요?
            </S.DetailTitle>
            <S.DetailShowAll>
              
            </S.DetailShowAll>
          </S.TitleWrapper>
        </S.LandingDetailWrapper>
      </S.LandingWrapper>
    </>
  );
};

export default LandingPage;
