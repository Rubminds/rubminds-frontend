import React, { useCallback, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { toggleNoteModal } from '../../../modules/user';
import { Test } from '../../../assets/imgs';

const NoteModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const userList = [
    { name: '한놈', content: '나랑 같이 프젝 하던가' },
    { name: '두식이', content: '쟤랑 하지마' },
    { name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { name: '너구리', content: '프 던가' },
    { name: '한놈', content: '나랑 같이 프젝 하던가' },
    { name: '두식이', content: '쟤랑 하지마' },
    { name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { name: '너구리', content: '프 던가' },
  ];
  const userList2 = [
    { name: '한놈', content: 'step 2' },
    { name: '두식이', content: '쟤랑 하지마' },
    { name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { name: '너구리', content: '프 던가' },
    { name: '한놈', content: '나랑 같이 프젝 하던가' },
    { name: '두식이', content: '쟤랑 하지마' },
    { name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { name: '너구리', content: '프 던가' },
  ];

  const onCloseClick = useCallback(() => {
    dispatch(toggleNoteModal());
  }, []);

  const onModalStatusClick = useCallback(
    status => () => {
      setStep(status);
    },
    [],
  );
  return (
    <S.NoteModalWrapper>
      <S.ModalHeader>
        <S.HeaderTitle>쪽지함</S.HeaderTitle>
        <S.CloseButton onClick={onCloseClick} />
      </S.ModalHeader>
      {step <= 2 ? (
        <>
          <S.ModalStatusWrapper>
            <S.ModalStatus current={step} value={1} onClick={onModalStatusClick(1)}>
              받은 쪽지함
            </S.ModalStatus>
            <S.ModalStatus current={step} value={2} onClick={onModalStatusClick(2)}>
              보낸 쪽지함
            </S.ModalStatus>
          </S.ModalStatusWrapper>
          <S.UserListWrapper>
            {step === 1
              ? userList.map(v => (
                  <S.UserRow>
                    <S.UserName>{v.name}</S.UserName>
                    <S.LastMessage>{v.content}</S.LastMessage>
                  </S.UserRow>
                ))
              : userList2.map(v => (
                  <S.UserRow>
                    <S.UserName>{v.name}</S.UserName>
                    <S.LastMessage>{v.content}</S.LastMessage>
                  </S.UserRow>
                ))}
          </S.UserListWrapper>
        </>
      ) : (
        <></>
      )}
    </S.NoteModalWrapper>
  );
};
export default NoteModal;
