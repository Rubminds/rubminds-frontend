import React,{useCallback} from 'react';
import * as S from './style';
import { ExitBtn, Test } from '../../../assets/imgs'

const UserListModal = ({ userList, maxUserNum,closeModal }) => {
    const AddUser = useCallback(()=>{
        //팀원 추가 액션
    },[])
  const rendering = () => {
    const empty = [];
    for (let i = 0; i < maxUserNum - userList.length; i++) {
      empty.push(<S.User key={i} onClick={AddUser}><S.UserAvatar src={Test}/>&nbsp;자리가 비었습니다.</S.User>);
    }
    return empty;
  };
  return (
    <S.UserListWrapper>
      <S.CloseBtn onClick={closeModal}>
        <ExitBtn width="12px" height="12px"/>
      </S.CloseBtn>
      <S.UserList>
        {userList.map((v) => {
          return <S.User key={v.id}><S.UserAvatar src={Test}/>&nbsp;{v.userName}</S.User>;
        })}
        {rendering()}
      </S.UserList>
    </S.UserListWrapper>
  );
};

export default UserListModal;
