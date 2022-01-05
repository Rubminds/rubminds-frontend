import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from './style';

import { PostTotalInfo, ResultForm, BackButton, TeamEvaluation } from '../../components';
import { loadPost } from '../../modules/post';

const PostDetailPage = () => {
  const me = '김경원'; //추후에 리덕스 상태를 가져올 것
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const { singlePost } = useSelector(state => state.post);

  useEffect(() => {
    console.log('page start');
    dispatch(loadPost(params.id));
    console.log(singlePost);
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
      {singlePost && singlePost.postsStatus === 'FINISHED' ? (
        <TeamEvaluation teamId={singlePost.teamId}/>
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
          <ResultForm />
        </>
      )}
    </S.PostDetailWrapper>
  );
};

export default PostDetailPage;
