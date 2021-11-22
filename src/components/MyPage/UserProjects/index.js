import React from 'react';
import * as S from './style';

const UserProjects = ({ me }) => {
  return (
    <S.CardWrapper>
      <S.Title>{me.name}님의 프로젝트 현황</S.Title>
      <S.Content>
        <S.StatusCircle status="모집중">
          <S.CircleLabel>모집중</S.CircleLabel>
          <S.CircleLabel>{me.projects.모집중.length}</S.CircleLabel>
        </S.StatusCircle>
        <S.StatusCircle status="진행중">
          <S.CircleLabel>진행중</S.CircleLabel>
          <S.CircleLabel>{me.projects.진행중.length}</S.CircleLabel>
        </S.StatusCircle>
        <S.StatusCircle status="진행종료">
          <S.CircleLabel>진행종료</S.CircleLabel>
          <S.CircleLabel>{me.projects.진행종료.length}</S.CircleLabel>
        </S.StatusCircle>
      </S.Content>
    </S.CardWrapper>
  );
};

export default UserProjects;
