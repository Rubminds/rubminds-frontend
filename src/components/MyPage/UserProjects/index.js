import React, {useCallback} from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const UserProjects = ({ user }) => {
  const getProjectInfoLength = useCallback((name) => {
    const projectInfo = user.projectInfo.find(e => e.kinds === name);
    console.log(projectInfo, name)
    return projectInfo ? projectInfo.count : 0;
  },[])
  return (
    <S.CardWrapper>
      <S.Title>{user.nickname}님의 프로젝트 현황</S.Title>
      <S.Content>
        <Link to="/projects/RECRUIT">
          <S.StatusCircle status="모집중">
            <S.CircleLabel>모집중</S.CircleLabel>
            <S.CircleLabel>{getProjectInfoLength('RECRUIT')}</S.CircleLabel>
          </S.StatusCircle>
        </Link>
        <Link to="/projects/WORKING">
          <S.StatusCircle status="진행중">
            <S.CircleLabel>진행중</S.CircleLabel>
            <S.CircleLabel>{getProjectInfoLength('WORKING')}</S.CircleLabel>
          </S.StatusCircle>
        </Link>
        <Link to="/projects/FINISHED">
          <S.StatusCircle status="진행종료">
            <S.CircleLabel>진행종료</S.CircleLabel>
            <S.CircleLabel>{getProjectInfoLength('FINISHED')}</S.CircleLabel>
          </S.StatusCircle>
        </Link>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserProjects;
