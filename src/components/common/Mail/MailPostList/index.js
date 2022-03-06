import React, { useEffect } from 'react';
import * as S from './style';

const MailPostList = ({ posts, onPostClick }) => {
  return (
    <>
      {posts.map(v => (
        <S.UserRow key={v.postId} onClick={onPostClick(v.postId)}>
          <S.UserName>{v.postTitle}</S.UserName>
        </S.UserRow>
      ))}
    </>
  );
};

export default MailPostList;
