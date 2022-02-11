import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from 'axios';

const PostListByScout = ({ me }) => {
    const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/user/${me.id}/posts?status=RECRUIT&page=1&size=5`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(response.data);
      
      setPosts(response.data.posts.content);
    };
    fetchData();
  }, []);
  return (
    <>
      <S.PostListWrapper>
          {
              posts.map(v =>{
                  <S.Post/>
              })
          }
      </S.PostListWrapper>
    </>
  );
};

export default PostListByScout;
