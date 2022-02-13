import React, { useCallback } from 'react';
import * as S from './style';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { ExitBtn } from '../../../assets/imgs';
import { deleteTeamUser } from '../../../modules/team';

const UserListModal = ({ headcount, closeModal, writerId, teamId, members, meId, postStatus }) => {
  const dispatch = useDispatch();

  const rendering = () => {
    //모집되지 않은 인원자리에 팀원추가 버튼 생성
    console.log(members);
    const empty = [];
    for (let i = 0; i < headcount - members.length; i++) {
      empty.push(
        <S.AddMember key={i}>
          <BsPlusCircleDotted fontSize="3rem" />
          &nbsp;
        </S.AddMember>,
      );
    }
    return empty;
  };

  const onDeleteUserClick = useCallback(
    (e, user) => {
      e.preventDefault();
      const deleteConfirm = window.confirm(`정말 ${user.userNickname}님을 추방하시겠습니까?`);
      if (deleteConfirm) {
        dispatch(deleteTeamUser({ teamId, userId: user.userId }));
      }
    },
    [dispatch, teamId],
  );

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
              {v.userId === writerId ? (
                <>
                  &nbsp;
                  <S.WriterMark /> 
                </>
              ) : (
                meId === writerId &&
                postStatus !== 'RANKING' &&
                postStatus !== 'FINISHED' && (
                  <>
                    <S.DeleteUserButton onClick={e => onDeleteUserClick(e, v)} />
                  </>
                )
              )}
            </S.User>
          );
        })}
        {postStatus === 'RECRUIT' && rendering()}
      </S.UserList>
    </S.UserListWrapper>
  );
};

export default UserListModal;
