import React, { useCallback, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { toggleNoteModal } from '../../../../modules/user';
import { NoteWrite, NoteRead, NoteUserList } from '../../../';

const NoteModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [target, setTarget] = useState(null);
  const userList = [
    { id: 1, name: '한놈', content: '나랑 같이 프젝 하던가' },
    { id: 2, name: '두식이', content: '쟤랑 하지마' },
    { id: 3, name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { id: 4, name: '너구리', content: '프 던가' },
    { id: 5, name: '한놈', content: '나랑 같이 프젝 하던가' },
    { id: 6, name: '두식이', content: '쟤랑 하지마' },
    { id: 7, name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { id: 8, name: '너구리', content: '프 던가' },
  ];
  const userList2 = [
    { id: 1, name: '한놈', content: 'step 2' },
    { id: 2, name: '두식이', content: '쟤랑 하지마' },
    { id: 3, name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { id: 4, name: '너구리', content: '프 던가' },
    { id: 5, name: '한놈', content: '나랑 같이 프젝 하던가' },
    { id: 6, name: '두식이', content: '쟤랑 하지마' },
    { id: 7, name: '석삼', content: '내용엄청길게 ㅁㄴ어 ㅁㄴ알넘ㅇ람너라ㅣㅁㄴ어라럼닐ㄴㅁ' },
    { id: 8, name: '너구리', content: '프 던가' },
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

  const onUserClick = useCallback(
    user => () => {
      setStep(3);
      setTarget(user);
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
            {step === 1 ? (
              <NoteUserList userList={userList} onUserClick={onUserClick} />
            ) : (
              <NoteUserList userList={userList2} onUserClick={onUserClick} />
            )}
          </S.UserListWrapper>
        </>
      ) : step === 3 ? (
        <NoteRead user={target} setStep={setStep} />
      ) : (
        <NoteWrite user={target} setStep={setStep} />
      )}
    </S.NoteModalWrapper>
  );
};
export default NoteModal;
