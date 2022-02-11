import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from 'axios';
import { FaBook } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';

const PostListByScout = ({ me }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/user/${me.id}/posts?status=RECRUIT&page=1&size=5`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const invitePosts = response.data.posts.content.filter(v => v.kinds !== 'SCOUT');

      setPosts(invitePosts);
    };
    me && fetchData();
  }, []);
  return (
    <S.PostListWrapper>
      {posts.map((v, i) => {
        return (
          <S.Post key={v.id}>
            <S.PostTitle>
              {v.kinds === 'STUDY' ? <FaBook /> : <HiUserGroup />}&nbsp;{v.title}
            </S.PostTitle>
            <S.InviteBtn/>
          </S.Post>
        );
      })}
    </S.PostListWrapper>
  );
};

export default PostListByScout;
