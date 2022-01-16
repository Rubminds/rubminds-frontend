import React from 'react';
import * as S from './style';

const NoteUserList = ({ userList, onUserClick }) => {
  return (
    <>
      {userList.map(v => (
        <S.UserRow onClick={onUserClick(v)} key={v.id}>
          <S.UserName>{v.name}</S.UserName>
          <S.LastMessage>{v.content}</S.LastMessage>
        </S.UserRow>
      ))}
    </>
  );
};

export default NoteUserList;
