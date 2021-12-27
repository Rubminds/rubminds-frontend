import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const UserProjects = ({ user }) => {
  return (
    <S.CardWrapper>
      <S.Title>{user.nickname}님의 프로젝트 현황</S.Title>
      <S.Content>
        <Link to="/projects/모집중">
          <S.StatusCircle status="모집중">
            <S.CircleLabel>모집중</S.CircleLabel>
            <S.CircleLabel>{user.projects.모집중.length}</S.CircleLabel>
          </S.StatusCircle>
        </Link>
        <Link to="/projects/진행중">
          <S.StatusCircle status="진행중">
            <S.CircleLabel>진행중</S.CircleLabel>
            <S.CircleLabel>{user.projects.진행중.length}</S.CircleLabel>
          </S.StatusCircle>
        </Link>
        <Link to="/projects/진행종료">
          <S.StatusCircle status="진행종료">
            <S.CircleLabel>진행종료</S.CircleLabel>
            <S.CircleLabel>{user.projects.진행종료.length}</S.CircleLabel>
          </S.StatusCircle>
        </Link>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserProjects;
