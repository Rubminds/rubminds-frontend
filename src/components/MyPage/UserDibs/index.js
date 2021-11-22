import React from 'react';
import * as S from './style';

const UserDibs = ({ me }) => {
  return (
    <S.CardWrapper>
      <S.Title>찜목록</S.Title>
      <S.Content>
        <S.Type>
          <S.TypeName>모집중</S.TypeName>
          <S.ValueLabel>{me.dibs.study.length}</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>진행중</S.TypeName>
          <S.ValueLabel>{me.dibs.study.length}</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>진행종료</S.TypeName>
          <S.ValueLabel>{me.dibs.study.length}</S.ValueLabel>
        </S.Type>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserDibs;
