import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const BackButton = () => {
  const history = useHistory();
  const onBackClick = useCallback(() => {
    history.go(-1);
  }, [history]);
  return <S.BackButton onClick={onBackClick} />;
};

export default BackButton;
