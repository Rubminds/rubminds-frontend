import React from 'react';
import * as S from './style';

const UserRating = ({ me }) => {
  return (
    <S.CardWrapper>
      <S.Title>{me.name}님의 평가도</S.Title>
      <S.Content>
        <S.RatingWrapper>
          <label>참여도</label>
          <S.StarWrapper>
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
          </S.StarWrapper>
        </S.RatingWrapper>
        <S.RatingWrapper>
          <label>숙련도</label>
          <S.StarWrapper>
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
          </S.StarWrapper>
        </S.RatingWrapper>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserRating;
