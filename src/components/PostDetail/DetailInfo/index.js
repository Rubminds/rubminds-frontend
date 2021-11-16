import React from 'react';
import * as S from './style';

const DetailInfo = ({ title, info }) => {
  return (
    <S.DetailInfoBetween>
      <S.DetailInfoLeft>{title}</S.DetailInfoLeft>
      <S.DetailInfoRight>
        {Array.isArray(info) ? info.map((v) => <label>#{v}</label>) : <label>{info}</label>}
      </S.DetailInfoRight>
    </S.DetailInfoBetween>
  );
};

export default DetailInfo;
