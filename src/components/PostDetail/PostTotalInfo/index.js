import React, { useCallback } from 'react';
import * as S from './style.js';
import { AiOutlineEdit, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdPersonAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { DetailInfo, UserListModal } from '../..';
import { likePost } from '../../../modules/post';

//게시글 상세정보.
//진행 원, 모집유형 등의 정보 담은 컴포넌트
const PostTotalInfo = ({ post, modalOpen, closeModal, openModal, me }) => {
  const combinedSkills = post.postSkills.concat(post.customSkills);
  const dispatch = useDispatch();
  
  const onLikeClick = useCallback(() => {
    dispatch(likePost(post.id));
  }, []);
  return (
    <S.PostDetailInfo>
      <S.DetailInfoWrapper>
        <S.DetailInfoBetween>
          <S.DetailInfoLeft bold>
            <S.AuthorAvatar src={post.writer.avatar} /> &nbsp;{post.writer.nickname}
          </S.DetailInfoLeft>
          <S.DetailInfoRight>{post.Date}</S.DetailInfoRight>
        </S.DetailInfoBetween>
        <DetailInfo title="모집유형" info={post.postsStatus} />
        <DetailInfo title="기술스택" info={combinedSkills} />
        <DetailInfo title="회의형태" info={post.meeting} />
        <DetailInfo title="지역" info={post.region} />
      </S.DetailInfoWrapper>

      <S.DetailInfoWrapper width="20%" Group>
        {modalOpen ? (
          <UserListModal userList={[]} maxUserNum={post.headcount} closeModal={closeModal} />
        ) : (
          <>
            <S.GroupBox>
              {me === post.writer ? (
                <>
                  {post.postsStatus === 'RECRUIT' ? (
                    <>
                      <S.DetailInfoContent toBtn>모집 종료하기</S.DetailInfoContent>
                      <S.DetailInfoContent>
                        <AiOutlineEdit /> &nbsp;수정
                      </S.DetailInfoContent>
                    </>
                  ) : post.postsStatus === 'WORKING' ? (
                    <>
                      <S.DetailInfoContent toBtn>모집중으로 변경</S.DetailInfoContent>
                      <S.DetailInfoContent>
                        <AiOutlineEdit /> &nbsp;수정
                      </S.DetailInfoContent>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <S.DetailInfoContent>
                  <MdPersonAdd /> &nbsp;모집자와 채팅하기
                </S.DetailInfoContent>
              )}
              <S.DetailInfoContent>
                {post.isLike ? (
                  <S.LikeWrapper onClick={onLikeClick}>
                    <AiFillStar color="#E4DC00" /> &nbsp;찜 취소
                  </S.LikeWrapper>
                ) : (
                  <S.LikeWrapper onClick={onLikeClick}>
                    <AiOutlineStar color="#E4DC00" />
                    &nbsp;찜 하기
                  </S.LikeWrapper>
                )}
              </S.DetailInfoContent>
            </S.GroupBox>
            <S.DetailInfoContent>
              <S.PostStatusCircle status={post.postsStatus} onClick={openModal}>
                <label>{post.postsStatus}</label>
                <label>1/{post.headcount}</label>
              </S.PostStatusCircle>
            </S.DetailInfoContent>
          </>
        )}
      </S.DetailInfoWrapper>
    </S.PostDetailInfo>
  );
};

export default PostTotalInfo;
