import React from 'react';
import * as S from './style';

import { Input, TextArea,Carousel } from '../..';

const ResultForm = () => {
  return (
    <S.ResultFormWrapper>
      <S.FormBigTitle>결과</S.FormBigTitle>
      <S.FormSmallTitle>첨부 이미지</S.FormSmallTitle>
      <Carousel size="30rem"/>
      <S.FormSmallTitle>진행 방법 및 결과 설명</S.FormSmallTitle>
      <TextArea/>
      <S.FormSmallTitle>참고 링크</S.FormSmallTitle>
      <Input placeholder="ex) github.com/Rubminds" />
      <S.Submit>결과물 업로드</S.Submit>
    </S.ResultFormWrapper>
  );
};

export default ResultForm;
