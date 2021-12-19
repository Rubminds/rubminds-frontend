import React from 'react';
import * as S from './style';

const Paper = ({ children, ...props }) => {
  return <S.Paper {...props}>{children}</S.Paper>;
};

export default Paper;
