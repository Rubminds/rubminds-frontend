import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from './style';
import axios from 'axios';

import { PostTotalInfo, ResultForm, BackButton, TeamEvaluation } from '../../components';

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const [userListModalOpen, setUserListModalOpen] = useState(false);
  const [processEndModalOpen, setProcessEndModalOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const params = useParams();
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/post/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setPost(response.data);
      console.log(response.data);
      const teamResponse = await axios.get(`/team/${response.data.teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setMembers(teamResponse.data.teamUsers);
    };
    fetchData();
  }, []);

  const openModal = useCallback(target =>{
    console.log(target);
    target === 'userlist' ? setUserListModalOpen(true) : setProcessEndModalOpen(true);
  }, []);
  const closeModal = useCallback(target => () =>{
    target === 'userlist' ? setUserListModalOpen(false) : setProcessEndModalOpen(false);
  }, []);

  return (
    <S.PostDetailWrapper>
      <BackButton />
      {post &&
        (post.postsStatus === 'RANKING' ? (
          <TeamEvaluation
            teamId={post.teamId}
            writerId={post.writer.id}
            kinds={post.kinds}
            postId={post.id}
            me={me}
          />
        ) : (
          <>
            <S.PostDetailTitle>{post.title}</S.PostDetailTitle>
            <S.PostDetailDate>{post.createAt}</S.PostDetailDate>
            <PostTotalInfo
              post={post}
              userListModalOpen={userListModalOpen}
              processEndModalOpen={processEndModalOpen}
              closeModal={closeModal}
              openModal={openModal}
              me={me}
              members={members}
            />
            <S.PostDetailContent>{post.content}</S.PostDetailContent>

            {post.postsStatus === 'FINISHED' && <ResultForm post={post} />}
          </>
        ))}
    </S.PostDetailWrapper>
  );
};

export default PostDetailPage;
