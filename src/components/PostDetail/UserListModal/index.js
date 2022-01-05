import React, { useCallback } from 'react';
import * as S from './style';
import { ExitBtn, Test } from '../../../assets/imgs';
import { BsPlusCircleDotted } from 'react-icons/bs';

const UserListModal = ({ userList, headcount, closeModal, writerName }) => {
  const AddUser = useCallback(() => {
    //팀원 추가 액션
  }, []);
  //모집되지 않은 인원자리에 팀원추가 버튼 생성
  const rendering = () => {
    console.log(userList);
    const empty = [];
    for (let i = 0; i < headcount; i++) {
      empty.push(
        <S.AddMember key={i} onClick={AddUser}>
          <BsPlusCircleDotted fontSize="3rem" />
          &nbsp;&nbsp;팀원 추가
        </S.AddMember>,
      );
    }
    return empty;
  };
  return (
    <S.UserListWrapper>
      <S.CloseBtn onClick={closeModal}>
        <ExitBtn width="1.2rem" height="1.2rem" />
      </S.CloseBtn>
      <S.UserList>
        {userList.map(v => {
          return (
            <S.User key={`user${v.userId}`} to={`/mypage/${v.userId}`}>
              <S.UserAvatar src={v.avatar} key={`avatar${v.userId}`} />
              &nbsp;&nbsp;{v.userNickname} {v.userNickname === writerName && <>&nbsp;<S.WriterMark/></>}
            </S.User>
          );
        })}
        {rendering()}
      </S.UserList>
    </S.UserListWrapper>
  );
};

export default UserListModal;
