import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from './style';

import { PostTotalInfo, ResultForm, BackButton, TeamEvaluation } from '../../components';
import { loadPost } from '../../modules/post';
import { loadTeamMembers } from '../../modules/team';

const PostDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const { singlePost } = useSelector(state => state.post);
  const { members } = useSelector(state => state.team);
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(loadPost(params.id));
      await dispatch(loadTeamMembers(singlePost.teamId));
    };
    console.log('page start');
    fetchData();
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);
  return (
    <S.PostDetailWrapper>
      <BackButton />
      {singlePost ? (
        (singlePost.postsStatus === 'RANKING' && members.length !== 0) ? (
          <TeamEvaluation
            teamId={singlePost.teamId}
            writerId={singlePost.writer.id}
            members={members}
          />
        ) : (
          <>
            <S.PostDetailTitle>{singlePost.title}</S.PostDetailTitle>
            <S.PostDetailDate>{singlePost.createAt}</S.PostDetailDate>
            <PostTotalInfo
              post={singlePost}
              modalOpen={modalOpen}
              closeModal={closeModal}
              openModal={openModal}
              me={me}
              members={members}
            />
            <S.PostDetailContent>{singlePost.content}</S.PostDetailContent>

            {singlePost.postsStatus === 'FINISHED' && <ResultForm postId={singlePost.id} />}
          </>
        )
      ) : (
        <></>
      )}
    </S.PostDetailWrapper>
  );
};

export default PostDetailPage;
