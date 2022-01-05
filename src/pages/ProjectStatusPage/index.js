import React from 'react';
import * as S from './style';
import { useParams } from 'react-router-dom';

import { BackButton,PostCard } from '../../components';

const ProjectStatusPage = () => {
  const me = '김경원';
  const params = useParams();
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
      status: '진행종료',
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
      status: '진행종료',
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
      status: '진행종료',
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
    <S.ProjectStatusPageWrapper>
      <BackButton />
      <S.ContentsWrapper>
        <S.Title>
          {me}님의&nbsp;
          {params.type === 'RECRUIT'
            ? '모집중인'
            : params.type === 'WORKING'
            ? '진행중인'
            : '진행종료된'}
          &nbsp;프로젝트 현황
        </S.Title>
        <S.PostsWrapper>
          {Posts.map((v) => {
            return params.type === v.postStatus && <PostCard post={v} key={v.id} />;
          })}
        </S.PostsWrapper>
      </S.ContentsWrapper>
    </S.ProjectStatusPageWrapper>
  );
};

export default ProjectStatusPage;
