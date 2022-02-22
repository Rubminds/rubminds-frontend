import React, { useEffect, useState, useCallback } from 'react';
import * as S from './style';
import axios from 'axios';
import { FaBook } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { MdPersonAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { sendMail } from '../../../../modules/mail';

const PostListByScout = ({ me, setPostListOpen, userId, userNickname, setEffectSwitch }) => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      //const response = await axios.get(`/user/${me.id}/posts?status=RECRUIT&page=1&size=5`, {
      const response = await axios.get('/post/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setPosts(response.data);
    };
    me && fetchData();
  }, []);

  const onPostSelectClick = useCallback(
    (postId, kinds) => () => {
      if (kinds !== 'SCOUT') {
        dispatch(
          sendMail({ postId, content: `sdnimbur@${postId}@${me.id}@${userId}@${userNickname}` }),
        );
        setEffectSwitch(prev => !prev);
        setPostListOpen(false);
        alert(`${userNickname}을 초대했습니다.`)
      }
    },
    [dispatch, setPostListOpen, me.id, userId, setEffectSwitch, userNickname],
  );

  const onBackBtnClick = useCallback(() => {
    setPostListOpen(false);
  }, []);

  return (
    <>
      <S.PostTitle>게시글 목록</S.PostTitle>
      <S.BackBtn onClick={onBackBtnClick} />
      {posts.map(v => {
        return (
          <S.Post key={v.id} kinds={v.kinds}>
            <S.PostTitle>
              {v.kinds === 'STUDY' ? (
                <FaBook />
              ) : v.kinds === 'SCOUT' ? (
                <MdPersonAdd />
              ) : (
                <HiUserGroup />
              )}
              &nbsp;{v.title}
            </S.PostTitle>
            <S.InviteBtn onClick={onPostSelectClick(v.id, v.kinds)} />
          </S.Post>
        );
      })}
    </>
  );
};

export default PostListByScout;
