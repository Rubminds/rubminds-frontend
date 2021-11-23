import React from 'react';
import * as S from './style';

import { BackButton, UserProfile, UserProjects, UserRating,UserDibs } from '../../components';

const MyPage = () => {
  const me = {
    name: '김경원',
    avatar: '회원이미지',
    introduce:
      '저는 대학생이고 프론트엔드 개발자가 되기를 희망합니다. ',
    skills: ['노드', '리액트', '자바스크립트'],
    projects: {
      모집중: [1],
      진행중: [1, 2],
      진행종료: [1],
    },
    dibs: {
      study: [1, 2],
      scout: [1],
      project: [1],
    },
    rating: {
      participateRatio: 4,
      skillfulRatio: 3,
    },
  };
  return (
    <S.MyPageWrapper>
      <BackButton />
      <UserProfile me={me} />
      <S.Division>
        <UserProjects me={me}/>
        <UserRating me={me}/>
      </S.Division>
      <UserDibs me={me}/>
    </S.MyPageWrapper>
  );
};

export default MyPage;
