import React, {useCallback} from 'react';
import * as S from './style';

const ProcessEndModal = ({closeModal,onChangeStatusClick}) => {
    
  return (
    <S.ModalWrapper>
      <S.ModalLabel>프로젝트를 완료하셨나요?</S.ModalLabel>
      <S.ModalLabel>팀원 평가를 진행한 후에 프로젝트 결과물을 </S.ModalLabel>
      <S.ModalLabel>게시해보세요!</S.ModalLabel>
      <S.BtnsWrapper>
        <S.StyledButton bgColor="#F0F0F0" onClick={closeModal}>아니요</S.StyledButton>
        <S.StyledButton bgColor="#CDF6E8" onClick={onChangeStatusClick('RANKING')}>평가하기</S.StyledButton>
      </S.BtnsWrapper>
    </S.ModalWrapper>
  );
};

export default ProcessEndModal;
