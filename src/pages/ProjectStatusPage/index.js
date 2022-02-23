import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { BackButton, PostCard } from '../../components';
import {POST_STATUS} from '../../constants'

const ProjectStatusPage = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [nickname, setNickname] = useState('')
  
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
      setNickname(response.data.nickname)
      setPosts(response.data.posts.content);
    };
    fetchData();
  }, []);

  return (
    <S.ProjectStatusPageWrapper>
      <BackButton />
      <S.ContentsWrapper>
        <S.Title>
          {nickname}님의&nbsp;
          {POST_STATUS[params.status]}
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
