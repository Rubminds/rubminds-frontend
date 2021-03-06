import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import * as S from './style';
import axios from 'axios';

import { PostTotalInfo, ResultForm, BackButton, TeamEvaluation } from '../../components';

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const [userListModalOpen, setUserListModalOpen] = useState(false);
  const [processEndModalOpen, setProcessEndModalOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const params = useParams();
  const history = useHistory();
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`/post/${params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setPost(response.data);
        if (response.data.kinds !== 'SCOUT') {
          const teamResponse = await axios.get(`/team/${response.data.teamId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          });
          setMembers(teamResponse.data.teamUsers);
        }
      }catch(err){
        alert(err.response.data.error.info);
        history.go(-1);
      }
      
    };
    fetchData();
  }, []);

  const openUserListModal = useCallback(() => {
    post && post.kinds !== 'SCOUT' && setUserListModalOpen(true);
  }, [post]);
  const closeUserListModal = useCallback(() => {
    setUserListModalOpen(false);
  }, []);
  const openProcessEndModal = useCallback(() => {
    setProcessEndModalOpen(true);
  }, []);
  const closeProcessEndModal = useCallback(() => {
    setProcessEndModalOpen(false);
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
              closeUserListModal={closeUserListModal}
              openUserListModal={openUserListModal}
              closeProcessEndModal={closeProcessEndModal}
              openProcessEndModal={openProcessEndModal}
              me={me}
              members={members}
            />
            <S.PostDetailContent>{post.content}</S.PostDetailContent>

            {post.postsStatus === 'FINISHED' && (
              <ResultForm post={post} meId={me.id} adminId={post.writer.id} />
            )}
          </>
        ))}
    </S.PostDetailWrapper>
  );
};

export default PostDetailPage;
