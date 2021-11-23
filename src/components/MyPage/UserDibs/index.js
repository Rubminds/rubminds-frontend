import React from 'react';
import * as S from './style';

const UserDibs = ({ me }) => {
  return (
    <S.CardWrapper>
      <S.TitleWrapper>
        <S.Title>찜목록</S.Title>
        <S.TitleDetail>자세히 보기</S.TitleDetail>
      </S.TitleWrapper>
      <S.Content>
        <S.Type>
          <S.TypeName>스터디</S.TypeName>
          <S.ValueLabel>{me.dibs.study.length}</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>스카웃</S.TypeName>
          <S.ValueLabel>{me.dibs.scout.length}</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>프로젝트</S.TypeName>
          <S.ValueLabel>{me.dibs.project.length}</S.ValueLabel>
        </S.Type>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserDibs;
