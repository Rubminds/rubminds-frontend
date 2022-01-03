import React, {useCallback} from 'react';
import * as S from './style';

const DibsInfo = ({Posts, setApiQuery}) => {
  const getKindsNum = useCallback((kinds) => {
    const kindsArray = Posts.filter(e => e.kinds === kinds);
    return kindsArray.length
  },[Posts])

  const setQueryByKinds = useCallback((kinds)=>{

  },[])
  return (
    <S.DibsInfoWrapper>
    <S.Title>찜목록</S.Title>
      <S.Content>
        <S.Type onClick={setQueryByKinds('STUDY')}>
          <S.TypeName>스터디</S.TypeName>
          <S.ValueLabel>{getKindsNum('STUDY')}</S.ValueLabel>
        </S.Type>
        <S.Type onClick={setQueryByKinds('SCOUT')}>
          <S.TypeName>스카웃</S.TypeName>
          <S.ValueLabel>{getKindsNum('SCOUT')}</S.ValueLabel>
        </S.Type>
        <S.Type onClick={setQueryByKinds('PROJECT')}>
          <S.TypeName>프로젝트</S.TypeName>
          <S.ValueLabel>{getKindsNum('PROJECT')}</S.ValueLabel>
        </S.Type>
      </S.Content>
    </S.DibsInfoWrapper>
  );
};

export default DibsInfo;
