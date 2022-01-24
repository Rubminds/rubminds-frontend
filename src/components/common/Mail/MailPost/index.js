import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { FaRegPaperPlane } from 'react-icons/fa';

import useInput from '../../../../hooks/useInput';

const MailPost = ({ postId, setChatroomNum }) => {
  const [chats, setChats] = useState([]); //전체 채팅내용
  const [postTitle, setPostTitle] = useState('게시글제목');
  const [userInput, onChangeUserInput, setUserInput] = useInput('')
  const dispatch = useDispatch();

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
    //fetchData();
  }, []);

  const sendMsg = useCallback(async(e) => {
    e.preventDefault();
    console.log(userInput)
    const response = await axios.post('/chat',{postId, content:userInput}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    console.log(response.data);
    setUserInput('')
  }, [postId, userInput, setUserInput]);

  return (
    <S.ContentWrapper>
      <S.BackBtn onClick={onDeleteClick} />
      <S.Content>
        <S.PostTitle>{postTitle}</S.PostTitle>
        <S.Messages></S.Messages>
        <S.InputWrapper onSubmit={sendMsg}>
          <S.Input type="text" onChange={onChangeUserInput}/>
          <S.SendBtn type="submit">
            <FaRegPaperPlane />
          </S.SendBtn>
        </S.InputWrapper>
      </S.Content>
    </S.ContentWrapper>
  );
};

export default MailPost;
