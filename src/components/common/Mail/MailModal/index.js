import React, { useCallback, useState, useEffect } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { toggleMailModal } from '../../../../modules/user';
import { setChatroom, setStep } from '../../../../modules/mail';
import { MailPostList, MailPost } from '../../..';

const MailModal = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { chatroomNum, step } = useSelector(state => state.mail);
  const [posts, setPosts] = useState([]);
  const [modalOpenId, setModalOpenId] = useState(-1); //유저 클릭시 모달에 전달할 유저 아이디
  const [modalOpenNickname, setModalOpenNickname] = useState('');
  const [apiQuery, setApiQuery] = useState(`/chat?kinds=${step}`);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiQuery}&page=1&size=10`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setPosts(response.data.content);
    };
    me && fetchData();
  }, [apiQuery, me]);

  const onCloseClick = useCallback(() => {
    dispatch(toggleMailModal());
  }, [dispatch]);

  const onModalStatusClick = useCallback(
    status => () => {
      const prevStatus = step;
      const currentApiQuery = apiQuery;
      const changedQuery = currentApiQuery.replace(prevStatus, status);
      dispatch(setStep(status));
      setApiQuery(changedQuery);
    },
    [apiQuery, step, dispatch],
  );

  const onPostClick = useCallback(
    postId => () => {
      dispatch(setChatroom(postId));
    },
    [dispatch],
  );

  const openUserModal = useCallback((e, senderId, senderNickname) => {
    e.stopPropagation();
    setModalOpenId(senderId);
    setModalOpenNickname(senderNickname);
  }, []);

  const closeUserModal = useCallback(e => {
    e.stopPropagation();
    setModalOpenId(-1);
    setModalOpenNickname('');
  }, []);

  return (
    <S.MailModalWrapper onClick={closeUserModal}>
      <S.ModalHeader>
        <S.HeaderTitle>쪽지함</S.HeaderTitle>
        <S.CloseButton onClick={onCloseClick} />
      </S.ModalHeader>
      {me ? (
        !chatroomNum ? (
          <>
            <S.ModalStatusWrapper>
              <S.ModalStatus
                current={step}
                value={'PROJECT'}
                onClick={onModalStatusClick('PROJECT')}
              >
                프로젝트
              </S.ModalStatus>
              <S.ModalStatus current={step} value={'STUDY'} onClick={onModalStatusClick('STUDY')}>
                스터디
              </S.ModalStatus>
              <S.ModalStatus current={step} value={'SCOUT'} onClick={onModalStatusClick('SCOUT')}>
                스카웃
              </S.ModalStatus>
            </S.ModalStatusWrapper>
            <S.PostListWrapper>
              {posts.length > 0 && <MailPostList posts={posts} onPostClick={onPostClick} />}
            </S.PostListWrapper>
          </>
        ) : (
          <MailPost
            postId={chatroomNum}
            me={me}
            modalOpenId={modalOpenId}
            modalOpenNickname={modalOpenNickname}
            setModalOpenId={setModalOpenId}
            openUserModal={openUserModal}
            step={step}
          />
        )
      ) : (
        <S.DisabledForm>
          <S.DisabledIcon />
          <S.DisabledLabel>로그인을 해주세요.</S.DisabledLabel>
        </S.DisabledForm>
      )}
    </S.MailModalWrapper>
  );
};
export default MailModal;
