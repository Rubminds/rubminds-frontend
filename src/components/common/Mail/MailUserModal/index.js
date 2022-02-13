import React, { useCallback, useState } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PostListByScout } from '../../..';
import { sendMail } from '../../../../modules/mail';

/*
@params 
userId: 모달에 띄울 정보로 선택된 유저
postId: 게시글 아이디
step: 게시글 유형
writerId: 게시글 작성자
*/
const MailUserModal = ({ userId, postId,userNickname, me, step, writerId, setEffectSwitch,setModalOpenId }) => {
  const [postListOpen, setPostListOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const onInviteClick = useCallback(
    async e => {
      e.stopPropagation();
      e.preventDefault();
      if (step === 'SCOUT') {
        setPostListOpen(true);
      } else {
        dispatch(sendMail({ postId, content: `sdnimbur@${postId}@${me.id}@${userId}@${userNickname}` }))
        setEffectSwitch(prev => !prev)
        setModalOpenId(false);
      }
    },
    [me.id, postId, userId, step, userNickname, setEffectSwitch, setModalOpenId],
  );

  const onUserPageClick = useCallback(() => {
    history.push(`/userpage/${userId}`);
  }, [history, userId]);

  return (
    <S.ModalWrapper postlist={postListOpen}>
      {postListOpen ? (
        <PostListByScout
          me={me}
          setPostListOpen={setPostListOpen}
          userId={userId}
          userNickname={userNickname}
          setEffectSwitch={setEffectSwitch}
        />
      ) : (
        <>
          {step === 'SCOUT'
            ? writerId !== me.id &&
              userId !== me.id && <S.ModalLabel onClick={onInviteClick}>초대하기</S.ModalLabel>
            : writerId === me.id &&
              userId !== me.id && <S.ModalLabel onClick={onInviteClick}>초대하기</S.ModalLabel>}
          <S.ModalLabel onClick={onUserPageClick}>유저페이지</S.ModalLabel>
        </>
      )}
    </S.ModalWrapper>
  );
};

export default MailUserModal;
