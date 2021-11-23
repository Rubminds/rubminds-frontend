import React from 'react';
import * as S from './style';

import { BackButton, DibsInfo, DibsPosts } from '../../components';

const DibsPage = () => {
  const Posts = [
    {
      id: 1,
      category: 'study',
      status: '모집중',
      title: '알고리즘 공부 하실분',
      skills: ['python', 'javascript'],
    },
    {
      id: 2,
      category: 'scout',
      status: '진행완료',
      title: '저좀 데려가실분',
      skills: ['react', 'javascript', 'redux'],
    },
    {
      id: 3,
      category: 'project',
      status: '진행중',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 4,
      category: 'project',
      status: '모집중',
      title:
        '웹 프론트엔드 프로젝트 인원 구해요. 2줄이상 테스트 하는중입니다. 2줄이상 테스트 하는중입니다. 2줄이상 테스트 하는중입니다',
      skills: ['react', 'javascript'],
    },
    {
      id: 5,
      category: 'study',
      status: '진행완료',
      title: '알고리즘 공부 하실분',
      skills: ['python', 'javascript'],
    },
    {
      id: 6,
      category: 'scout',
      status: '진행중',
      title: '저좀 데려가실분',
      skills: ['react', 'javascript', 'redux'],
    },
    {
      id: 7,
      category: 'project',
      status: '모집중',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 8,
      category: 'project',
      status: '진행완료',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 9,
      category: 'project',
      status: '모집중',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 10,
      category: 'project',
      status: '모집중',
      title: '웹 프로젝트 인원3 구해요',
      skills: ['react', 'javascript'],
    },
  ];
  return (
    <S.DibsPageWrapper>
      <BackButton />
      <S.ContentsWrapper>
        <DibsInfo />
        <DibsPosts Posts={Posts} />
      </S.ContentsWrapper>
    </S.DibsPageWrapper>
  );
};

export default DibsPage;
