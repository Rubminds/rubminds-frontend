import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const BackButton = ({...props}) => {
  const history = useHistory();
  const onBackClick = useCallback(() => {
    history.go(-1);
  }, [history]);
  return <S.BackButton onClick={onBackClick} {...props}/>;
};

export default BackButton;
