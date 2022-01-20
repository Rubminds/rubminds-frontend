import React, { useCallback, useRef } from 'react';
import { useState } from 'react';
import * as S from '../WrittingInnerForm/style';

const Kinds = ({ kinds, setKinds, setIsScout }) => {

  const [click, setClick] = useState(['click','','']); 
  const onKindsChange = useCallback(
    e => {
      setKinds(e.currentTarget.getAttribute('value'));
      if(e.currentTarget.getAttribute('value') === 'STUDY'){
        setIsScout(false);
        setClick(['click','','']); 
      }else if(e.currentTarget.getAttribute('value') === 'SCOUT'){
        setIsScout(true);
        setClick(['','click','']);
      }else{
        setIsScout(false);
        setClick(['','','click']);
      }
    },
    [kinds]
  );
  return (
    <>
      <S.MainTitle fontSize="3rem" marginBottom="3%">
        모집 유형
      </S.MainTitle>
      <S.CategoryWrapper>
        <S.CategoryCard
          name="kinds"
          value="STUDY"
          backgroundColor={click[0]}
          onClick={onKindsChange}
        >
          <S.Book fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스터디</S.MainTitle>
        </S.CategoryCard>

        <S.CategoryCard
          name="kinds"
          value="SCOUT"
          backgroundColor={click[1]}
          onClick={onKindsChange}
        >
          <S.PersonAdd fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스카웃</S.MainTitle>
        </S.CategoryCard>

        <S.CategoryCard
          name="kinds"
          value="PROJECT"
          backgroundColor={click[2]}
          onClick={onKindsChange}
        >
          <S.UserGroup fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">프로젝트</S.MainTitle>
        </S.CategoryCard>
      </S.CategoryWrapper>
    </>
  );
};

export default Kinds;
