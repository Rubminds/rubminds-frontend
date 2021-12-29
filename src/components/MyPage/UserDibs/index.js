import React, {useCallback} from 'react';
import * as S from './style';

const UserDibs = ({ user }) => {
  const getProjectNumByKinds = useCallback((kinds) => {
    const kindsProject = user.likeInfo.find(e => e.kinds === kinds);
    console.log(kindsProject);
    return kindsProject ? kindsProject.count : 0;
  },[])
  return (
    <S.CardWrapper>
      <S.TitleWrapper>
        <S.Title>찜목록</S.Title>
        <S.TitleDetail to="/dibs">자세히 보기</S.TitleDetail>
      </S.TitleWrapper>
      <S.Content>
        <S.Type>
          <S.TypeName>스터디</S.TypeName>
          <S.ValueLabel>{getProjectNumByKinds('STUDY')}</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>스카웃</S.TypeName>
          <S.ValueLabel>{getProjectNumByKinds('SCOUT')}</S.ValueLabel>
        </S.Type>
        <S.Type>
          <S.TypeName>프로젝트</S.TypeName>
          <S.ValueLabel>{getProjectNumByKinds('PROJECT')}</S.ValueLabel>
        </S.Type>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserDibs;
