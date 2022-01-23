import React, { useCallback, useState, useEffect } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { toggleMailModal } from '../../../../modules/user';
import { MailPostList } from '../../..';

const MailModal = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const [step, setStep] = useState(1);
  const [target, setTarget] = useState(null);
  const [posts, setPosts] = useState([]);
  const [apiQuery, setApiQuery] = useState('/chat?kinds=PROJECT');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiQuery}&page=1&size=10`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(response.data);
    };

    me && fetchData();
  }, []);

  const onCloseClick = useCallback(() => {
    dispatch(toggleMailModal());
  }, []);

  const onModalStatusClick = useCallback(
    status => () => {
      setStep(status);
    },
    [],
  );

  const onUserClick = useCallback(
    user => () => {
      setStep(3);
      setTarget(user);
    },
    [],
  );
  return (
    <S.MailModalWrapper>
      <S.ModalHeader>
        <S.HeaderTitle>쪽지함</S.HeaderTitle>
        <S.CloseButton onClick={onCloseClick} />
      </S.ModalHeader>
      {me ? (
        step === 1 ? (
          <>
            <S.ModalStatusWrapper>
              <S.ModalStatus current={step} value={1} onClick={onModalStatusClick(1)}>
                게시글 목록
              </S.ModalStatus>
            </S.ModalStatusWrapper>
            <S.UserListWrapper>
              <MailPostList posts={posts} />
            </S.UserListWrapper>
          </>
        ) : (
          <></>
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
