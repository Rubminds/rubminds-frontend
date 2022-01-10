import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { BsPlusCircleDotted } from 'react-icons/bs';
import axios from 'axios'

import { ExitBtn } from '../../../assets/imgs';

const UserListModal = ({ headcount, closeModal, writerName, teamId }) => {
  const [members, setMembers] = useState([]);
  const AddUser = useCallback(() => {
    //팀원 추가 액션
  }, []);
  
  const rendering = () => {//모집되지 않은 인원자리에 팀원추가 버튼 생성
    console.log(members);
    const empty = [];
    for (let i = 0; i < headcount-1; i++) {
      empty.push(
        <S.AddMember key={i} onClick={AddUser}>
          <BsPlusCircleDotted fontSize="3rem" />
          &nbsp;&nbsp;팀원 추가
        </S.AddMember>,
      );
    }
    return empty;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/team/${teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setMembers(response.data.teamUsers)
    };
    fetchData();
  }, []);

  return (
    <S.UserListWrapper>
      <S.CloseBtn onClick={closeModal}>
        <ExitBtn width="1.2rem" height="1.2rem" />
      </S.CloseBtn>
      <S.UserList>
        {members.map(v => {
          return (
            <S.User key={`user${v.userId}`} to={`/mypage/${v.userId}`}>
              <S.UserAvatar src={v.avatar} key={`avatar${v.userId}`} />
              &nbsp;&nbsp;{v.userNickname}{' '}
              {v.userNickname === writerName && (
                <>
                  &nbsp;
                  <S.WriterMark />
                </>
              )}
            </S.User>
          );
        })}
        {rendering()}
      </S.UserList>
    </S.UserListWrapper>
  );
};

export default UserListModal;
