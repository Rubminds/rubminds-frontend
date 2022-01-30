import React, { useCallback } from 'react';
import * as S from './style';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

/*
@params 
userId: 모달에 띄울 정보로 선택된 유저
postId: 게시글 아이디
step: 게시글 유형
writerId: 게시글 작성자
*/
const MailUserModal = ({ userId, postId, me,step, writerId }) => {
  const history = useHistory();
  const onInviteClick = useCallback(async e => {
    e.preventDefault();
    const response = await axios.post(
      '/chat',
      { postId, content: `sdnimbur@${postId}@${me.id}@${userId}` },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    console.log(response.data);
  }, [me.id, postId, userId]);

  const onUserPageClick = useCallback(()=>{
    history.push(`/userpage/${userId}`)
  },[history, userId])

  return (
    <S.ModalWrapper>
      <S.ModalLabel onClick={onInviteClick}>초대하기</S.ModalLabel>
      {writerId === me.id && <S.ModalLabel onClick={onUserPageClick}>유저페이지</S.ModalLabel>}
    </S.ModalWrapper>
  );
};

export default MailUserModal;
