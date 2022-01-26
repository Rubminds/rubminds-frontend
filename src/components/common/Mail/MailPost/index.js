import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { FaRegPaperPlane } from 'react-icons/fa';

import useInput from '../../../../hooks/useInput';
import { Python } from '../../../../assets/imgs';
import { MailUserModal } from '../../..';

const MailPost = ({ postId, setChatroomNum }) => {
  const [chats, setChats] = useState([]); //전체 채팅내용
  const [postTitle, setPostTitle] = useState('게시글제목');
  const [modalOpenId, setModalOpenId] = useState(-1);
  const [userInput, onChangeUserInput, setUserInput] = useInput('');
  const dispatch = useDispatch();
  const chattemp = [
    {
      id: 1,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 2,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 3,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 4,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 5,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 6,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 7,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
  ];

  const onDeleteClick = useCallback(() => {
    setChatroomNum(null);
  }, [setChatroomNum]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/chat/${postId}?page=1&size=10`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(response.data);
      setChats(response.data);
    };
    fetchData();
  }, []);

  const sendMsg = useCallback(
    async e => {
      e.preventDefault();
      console.log(userInput);
      const response = await axios.post(
        '/chat',
        { postId, content: userInput },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      console.log(response.data);
      setUserInput('');
    },
    [postId, userInput, setUserInput],
  );

  const openUserModal = useCallback((e, senderId) => {
    e.stopPropagation();
    setModalOpenId(senderId);
  }, []);

  const closeUserModal = useCallback(() => {
    setModalOpenId(-1);
  }, []);

  return (
    <S.ContentWrapper onClick={closeUserModal}>
      <S.Header onClick={onDeleteClick}>
        <S.BackBtn />
        <S.PostTitle>{postTitle}</S.PostTitle>
      </S.Header>

      <S.Content>
        <S.Messages>
          {chattemp.map(v => (
            <S.MessageRow key={v.id}>
              <S.UserInfo>
                <S.UserAvatar src={Python} onClick={e => openUserModal(e, v.senderId)} />
                <S.InfoWrapper>
                  <S.Nickname>{v.senderNickname}</S.Nickname>
                  <S.SendTime>{v.createAt}</S.SendTime>
                </S.InfoWrapper>
              </S.UserInfo>
              <S.Msg>{v.content}</S.Msg>
            </S.MessageRow>
          ))}
        </S.Messages>
        <S.InputWrapper onSubmit={sendMsg}>
          <S.Input type="text" onChange={onChangeUserInput} />
          <S.SendBtn type="submit">
            <FaRegPaperPlane />
          </S.SendBtn>
        </S.InputWrapper>
        {modalOpenId > 0 && <MailUserModal />}
      </S.Content>
    </S.ContentWrapper>
  );
};

export default MailPost;
