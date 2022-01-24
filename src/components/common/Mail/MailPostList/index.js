import React from 'react';
import * as S from './style';

const MailPostList = ({ posts, onPostClick}) => {
  return (
    <>
      {posts.map(v => (
        <S.UserRow key={v.postId} onClick={onPostClick}>
          <S.UserName>{v.postTitle}</S.UserName>
          <S.LastMessage></S.LastMessage>
        </S.UserRow>
      ))}
    </>
  );
};

export default MailPostList;
