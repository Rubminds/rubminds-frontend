import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { BackButton, PostCard } from '../../components';

const ProjectStatusPage = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/user/${params.userId}/posts?status=${params.status}&page=1&size=5`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      console.log(response.data);
      response.data.content.forEach(v => (v.skill = v.postSkills));
      setPosts(response.data.content);
    };
    fetchData();
  }, []);

  return (
    <S.ProjectStatusPageWrapper>
      <BackButton />
      <S.ContentsWrapper>
        <S.Title>
          {}님의&nbsp;
          {params.status === 'RECRUIT'
            ? '모집중인'
            : params.status === 'WORKING'
            ? '진행중인'
            : '진행종료된'}
          &nbsp;프로젝트 현황
        </S.Title>
        <S.PostsWrapper>
          {posts.map(v => {
            return <PostCard post={v} key={v.id} />;
          })}
        </S.PostsWrapper>
      </S.ContentsWrapper>
    </S.ProjectStatusPageWrapper>
  );
};

export default ProjectStatusPage;
