import React, { useEffect } from 'react';
import * as S from './style';

const MailPostList = ({ posts, onPostClick}) => {
  useEffect(()=>{
    console.log(posts)
  })
  return (
    <>
      {posts.map(v => (
        <S.UserRow key={v.id} onClick={onPostClick(v.id)}>
          <S.UserName>{v.title}</S.UserName>
          <S.LastMessage>{posts.length}</S.LastMessage>
        </S.UserRow>
      ))}
    </>
  );
};

export default MailPostList;
