import React from 'react';
import * as S from './style';

const HeaderModal = () => {
  return (
    <S.HeaderModalWrapper>
      <S.ModalOption>마이페이지</S.ModalOption>
      <S.ModalOption>로그아웃</S.ModalOption>
    </S.HeaderModalWrapper>
  );
};

export default HeaderModal;
