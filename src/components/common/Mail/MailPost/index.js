import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { FaRegPaperPlane } from 'react-icons/fa';

import useInput from '../../../../hooks/useInput';
import { Python } from '../../../../assets/imgs';

const MailPost = ({ postId, setChatroomNum }) => {
  const [chats, setChats] = useState([]); //전체 채팅내용
  const [postTitle, setPostTitle] = useState('게시글제목');
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
      id: 1,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 1,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 1,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 1,
      senderId: 1,
      senderNickname: '동그라미',
      avatar: 'profile url',
      content: '채팅내용',
      createAt: '2021-01-25',
    },
    {
      id: 1,
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

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.BackBtn onClick={onDeleteClick} />
        <S.PostTitle>{postTitle}</S.PostTitle>
      </S.Header>

      <S.Content>
        <S.Messages>
          {chattemp.map(v => (
            <S.MessageRow>
              <S.UserInfo>
                <S.UserAvatar src={Python} />
                <S.InfoWrapper>
                  <S.Nickname>{v.senderNickname}</S.Nickname>
                  <S.SendTime>{v.createAt}</S.SendTime>
                </S.InfoWrapper>
              </S.UserInfo>
              <S.Msg>
                {v.content}
              </S.Msg>
            </S.MessageRow>
          ))}
        </S.Messages>
        <S.InputWrapper onSubmit={sendMsg}>
          <S.Input type="text" onChange={onChangeUserInput} />
          <S.SendBtn type="submit">
            <FaRegPaperPlane />
          </S.SendBtn>
        </S.InputWrapper>
      </S.Content>
    </S.ContentWrapper>
  );
};

export default MailPost;
