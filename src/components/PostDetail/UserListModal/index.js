import React, { useCallback } from 'react';
import * as S from './style';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { ExitBtn } from '../../../assets/imgs';
import { addTeamUser } from '../../../modules/team';

const UserListModal = ({ headcount, closeModal, writerName, teamId, members }) => {
  const dispatch = useDispatch();

  const onAddUserKeypress = useCallback(
    e => {
      //팀원 추가 액션
      dispatch(addTeamUser({ teamId, userId: e.target.value }));
      e.target.value='';
    },
    [dispatch, teamId],
  );

  const rendering = () => {
    //모집되지 않은 인원자리에 팀원추가 버튼 생성
    console.log(members);
    const empty = [];
    for (let i = 0; i < headcount - members.length; i++) {
      empty.push(
        <S.AddMember key={i}>
          <BsPlusCircleDotted fontSize="3rem" />
          &nbsp;&nbsp;
          <S.AddUserInput
            onKeyPress={e => e.key === 'Enter' && onAddUserKeypress(e)}
            placeholder="ID로 팀원 추가"
          />
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
        {members.map(v => {
          return (
            <S.User key={`user${v.userId}`} to={`/userpage/${v.userId}`}>
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
