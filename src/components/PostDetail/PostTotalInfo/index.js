import React, { useCallback, useState } from 'react';
import * as S from './style.js';
import { AiOutlineEdit, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { GrDocumentDownload } from 'react-icons/gr';
import { MdPersonAdd } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { DetailInfo, UserListModal, ProcessEndModal } from '../..';
import { likePost, changePostStatus, deletePost } from '../../../modules/post';
import { toggleMailModal } from '../../../modules/user/index.js';
import { setChatroom, setStep } from '../../../modules/mail';

//게시글 상세정보.
//진행 원, 모집유형 등의 정보 담은 컴포넌트
const PostTotalInfo = ({
  post,
  userListModalOpen,
  processEndModalOpen,
  closeUserListModal,
  openUserListModal,
  closeProcessEndModal,
  openProcessEndModal,
  me,
  members,
}) => {
  const [isLike, setIsLike] = useState(post.isLike);
  const combinedSkills = post.postSkills.concat(post.customSkills);
  const dispatch = useDispatch();
  const history = useHistory();

  const onEditClick = () => {
    history.push(`/editpost/${post.id}`);
  };

  const onUserClick = useCallback(()=>{
    history.push(`/userpage/${post.writer.id}`)
  },[history, post.writer.id])

  const onDeleteClick = useCallback(() => {
    const deleteConfirm = window.confirm(`정말 게시글을 삭제하시겠습니까?`);
    if (deleteConfirm) {
      dispatch(deletePost(post.id));
      window.location.replace('/');
    }
  }, [dispatch, post.id]);

  const onLikeClick = useCallback(() => {
    dispatch(likePost(post.id));
    setIsLike(prev => !prev);
  }, [dispatch, post.id]);

  const onChangeStatusClick = useCallback(
    status => () => {
      dispatch(changePostStatus({ postId: post.id, content: { postStatus: status } }));
      alert('변경되었습니다');
      window.location.replace(`/post/${post.id}`);
    },
    [post.id, dispatch],
  );

  const onStartChatClick = useCallback(() => {
    dispatch(setStep(post.kinds));
    dispatch(setChatroom(post.id));
    dispatch(toggleMailModal());
  }, [dispatch, post.id, post.kinds]);

  return (
    <S.PostDetailInfo>
      <S.DetailInfoWrapper>
        <S.DetailUserInfo onClick={onUserClick} cursor="true">
          <S.AuthorAvatar src={post.writer.avatar} /> &nbsp;
          {post.writer.nickname}
        </S.DetailUserInfo>
        <DetailInfo title="모집유형" info={post.kinds} />
        <DetailInfo title="기술스택" info={combinedSkills} />
        <DetailInfo title="회의형태" info={post.meeting} />
        <DetailInfo title="지역" info={post.region} />
        <S.FileContainer>
          {post.files.map((v, i) => (
            <S.UploadedFile href={v.url} key={i} download>
              <GrDocumentDownload fontSize="1.8rem" />
              &nbsp;{v.fileName}
            </S.UploadedFile>
          ))}
        </S.FileContainer>
      </S.DetailInfoWrapper>

      <S.DetailInfoWrapper width="30%" Group>
        {userListModalOpen ? (
          <UserListModal
            headcount={post.headcount}
            closeModal={closeUserListModal}
            writerId={post.writer.id}
            teamId={post.teamId}
            members={members}
            meId={me.id}
            postStatus={post.postsStatus}
          />
        ) : (
          <>
            {post.kinds === 'SCOUT' ? (
              <S.GroupBox>
                {me && me.id === post.writer.id ? (
                  <>
                    {post.postsStatus === 'RECRUIT' && (
                      <>
                        <S.DetailInfoContent toBtn onClick={onChangeStatusClick('FINISHED')}>
                          모집 종료하기
                        </S.DetailInfoContent>
                        <S.DetailInfoContent>
                          <div onClick={onEditClick}>
                            <AiOutlineEdit /> &nbsp;수정
                          </div>
                        </S.DetailInfoContent>
                        <S.DetailInfoContent>
                          <div onClick={onDeleteClick}>
                            <RiDeleteBin5Fill /> &nbsp;삭제
                          </div>
                        </S.DetailInfoContent>
                      </>
                    )}
                  </>
                ) : (
                  <S.DetailInfoContent onClick={onStartChatClick}>
                    <MdPersonAdd /> &nbsp;모집자와 대화하기
                  </S.DetailInfoContent>
                )}

                <S.DetailInfoContent>
                  {isLike ? (
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
            ) : (
              <S.GroupBox>
                {me && me.id === post.writer.id ? (
                  <>
                    {post.postsStatus === 'RECRUIT' ? (
                      <>
                        <S.DetailInfoContent toBtn onClick={onChangeStatusClick('WORKING')}>
                          모집 종료하기
                        </S.DetailInfoContent>
                        <S.DetailInfoContent>
                          <div onClick={onEditClick}>
                            <AiOutlineEdit /> &nbsp;수정
                          </div>
                        </S.DetailInfoContent>
                        <S.DetailInfoContent>
                          <div onClick={onDeleteClick}>
                            <RiDeleteBin5Fill /> &nbsp;삭제
                          </div>
                        </S.DetailInfoContent>
                      </>
                    ) : post.postsStatus === 'WORKING' ? (
                      <>
                        <S.DetailInfoContent toBtn onClick={openProcessEndModal} blue="true">
                          평가 후 완료하기
                        </S.DetailInfoContent>
                        <S.DetailInfoContent toBtn onClick={onChangeStatusClick('RECRUIT')}>
                          모집중으로 변경
                        </S.DetailInfoContent>
                        <S.DetailInfoContent>
                          <div onClick={onEditClick}>
                            <AiOutlineEdit /> &nbsp;수정
                          </div>
                        </S.DetailInfoContent>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <S.DetailInfoContent onClick={onStartChatClick}>
                    <MdPersonAdd /> &nbsp;모집자와 대화하기
                  </S.DetailInfoContent>
                )}

                <S.DetailInfoContent>
                  {isLike ? (
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
            )}
            <S.DetailInfoContent>
              <S.PostStatusCircle status={post.postsStatus} onClick={openUserListModal}>
                <label>{post.postsStatus}</label>
                {post.kinds !== 'SCOUT' && (
                  <label>
                    {members.length}/{post.headcount}
                  </label>
                )}
              </S.PostStatusCircle>
            </S.DetailInfoContent>
          </>
        )}
      </S.DetailInfoWrapper>
      {processEndModalOpen ? (
        <ProcessEndModal
          closeModal={closeProcessEndModal}
          onChangeStatusClick={onChangeStatusClick}
        />
      ) : (
        <></>
      )}
    </S.PostDetailInfo>
  );
};

export default PostTotalInfo;
