import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from './style';

import { PostTotalInfo, ResultForm, BackButton, TeamEvaluation } from '../../components';
import { loadPost } from '../../modules/post';

const PostDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const { singlePost } = useSelector(state => state.post);
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    console.log('page start');
    dispatch(loadPost(params.id));
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
        singlePost.postsStatus === 'RANKING' ? (
          <TeamEvaluation teamId={singlePost.teamId} writerId={singlePost.writer.id} />
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
            />
            <S.PostDetailContent>{singlePost.content}</S.PostDetailContent>

            {singlePost.postsStatus === 'FINISHED' && <ResultForm />}
          </>
        )
      ) : (
        <></>
      )}
    </S.PostDetailWrapper>
  );
};

export default PostDetailPage;
