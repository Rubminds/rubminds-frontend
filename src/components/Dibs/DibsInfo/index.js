import React from 'react';
import * as S from './style';

const DibsInfo = () => {
  return (
    <S.DibsInfoWrapper>
    <S.Title>찜목록</S.Title>
      <S.Content>
        <S.Type>
          <S.TypeName>스터디</S.TypeName>
          <S.ValueLabel>2</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>스카웃</S.TypeName>
          <S.ValueLabel>1</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>프로젝트</S.TypeName>
          <S.ValueLabel>1</S.ValueLabel>
        </S.Type>
      </S.Content>
    </S.DibsInfoWrapper>
  );
};

export default DibsInfo;
