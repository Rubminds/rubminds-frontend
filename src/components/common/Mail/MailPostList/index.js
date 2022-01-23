import React from 'react';
import * as S from './style';

const MailPostList = ({ posts}) => {
  return (
    <>
      {posts.map(v => (
        <S.UserRow key={v.id}>
          <S.UserName>{v.title}</S.UserName>
          <S.LastMessage></S.LastMessage>
        </S.UserRow>
      ))}
    </>
  );
};

export default MailPostList;
