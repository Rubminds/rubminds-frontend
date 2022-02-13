import React, { useEffect, useState, useCallback } from 'react';
import * as S from './style';
import axios from 'axios';
import { FaBook } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { sendMail } from '../../../../modules/mail';

const PostListByScout = ({ me, setPostListOpen, userId, setEffectSwitch }) => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

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

  const onPostSelectClick = useCallback(
     postId => () =>{
      dispatch(sendMail({ postId, content: `sdnimbur@${postId}@${me.id}@${userId}` }));
      setPostListOpen(false);
      setEffectSwitch(prev => !prev);
    },
    [dispatch, setPostListOpen, me.id, userId, setEffectSwitch],
  );

  const onBackBtnClick = useCallback(() => {
    setPostListOpen(false);
  }, []);

  return (
    <>
      <S.PostTitle>게시글 목록</S.PostTitle>
      <S.BackBtn onClick={onBackBtnClick} />
      {posts.map((v, i) => {
        return (
          <S.Post key={v.id}>
            <S.PostTitle>
              {v.kinds === 'STUDY' ? <FaBook /> : <HiUserGroup />}&nbsp;{v.title}
            </S.PostTitle>
            <S.InviteBtn onClick={onPostSelectClick(v.id)} />
          </S.Post>
        );
      })}
    </>
  );
};

export default PostListByScout;
