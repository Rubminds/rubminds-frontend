import React, { useCallback } from 'react';
import * as S from './style';
import {useHistory} from 'react-router-dom'; 

const Header = () => {

  const history = useHistory(); 
  const onLoginClick = useCallback(()=>{
    history.push('/login'); 
  }, []); 

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>Rubminds</S.HeaderContent>
      <S.HeaderContent onClick={onLoginClick}>로그인</S.HeaderContent>
    </S.HeaderWrapper>
  );
};

export default Header;
