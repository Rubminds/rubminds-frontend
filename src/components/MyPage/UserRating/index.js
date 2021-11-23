import React from 'react';
import * as S from './style';

import { MAX_STAR } from '../../../constants';

const UserRating = ({ me }) => {
  let idx=0;
  const render = (ratio, type) => {
    const empty = [];
    let decimal = Number((ratio % 1).toFixed(2)); // 소수점자리
    let integer = ratio - decimal; // 정수자리

    // 꽉찬 별 추가
    for (let i = 0; i < integer; i++) {
      empty.push(<S.Star filled="true" key={idx++}/>);
    }
    // 반쯤 채워진 별 추가
    for (let i = 0; i < decimal; i++) {
      empty.push(
        <b key={idx++}>
          <S.HiddenSvg>
            <linearGradient id={type} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#FFD975" offset={decimal}/>
              <stop stopColor="#f0f0f0" offset={decimal}/>
            </linearGradient>
          </S.HiddenSvg>
          <S.Star style={{ fill: `url(#${type})` }} key={idx++}/>
        </b>
      );
    }
    // 빈 별 추가
    for (let i = 0; i < (decimal > 0 ? MAX_STAR - integer - 1 : MAX_STAR - integer); i++) {
      empty.push(<S.Star key={idx++}/>);
    }
    return empty;
  };
  return (
    <S.CardWrapper>
      <S.Title>{me.name}님의 평가도</S.Title>
      <S.Content>
        <S.RatingWrapper>
          <label>참여도 &nbsp; {me.rating.attendanceRatio}</label>
          <S.StarWrapper>{render(me.rating.attendanceRatio, 'attendance')}</S.StarWrapper>
        </S.RatingWrapper>
        <S.RatingWrapper>
          <label>숙련도 &nbsp; {me.rating.skillfulRatio}</label>
          <S.StarWrapper>{render(me.rating.skillfulRatio, 'skillful')}</S.StarWrapper>
        </S.RatingWrapper>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserRating;
