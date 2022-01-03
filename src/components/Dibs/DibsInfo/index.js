import React from 'react';
import * as S from './style';

const DibsInfo = ({dibsNum, setQueryByKinds}) => {
  return (
    <S.DibsInfoWrapper>
    <S.Title>찜목록</S.Title>
      <S.Content>
        <S.Type onClick={setQueryByKinds('STUDY')}>
          <S.TypeName>스터디</S.TypeName>
          <S.ValueLabel>{dibsNum['STUDY']}</S.ValueLabel>
        </S.Type>
        <S.Type onClick={setQueryByKinds('SCOUT')}>
          <S.TypeName>스카웃</S.TypeName>
          <S.ValueLabel>{dibsNum['SCOUT']}</S.ValueLabel>
        </S.Type>
        <S.Type onClick={setQueryByKinds('PROJECT')}>
          <S.TypeName>프로젝트</S.TypeName>
          <S.ValueLabel>{dibsNum['PROJECT']}</S.ValueLabel>
        </S.Type>
      </S.Content>
    </S.DibsInfoWrapper>
  );
};

export default DibsInfo;
