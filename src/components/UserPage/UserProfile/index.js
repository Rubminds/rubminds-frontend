import React from 'react';
import * as S from './style';

const UserProfile = ({ user }) => {
  return (
    <S.RowContentWrapper>
      <S.Avatar src={user.avatar}  />
      <S.Content flex="6">
        <S.NameIntroduce>
          <S.Name>{user.nickname}</S.Name>
          <S.Introduce>{user.introduce}</S.Introduce>
        </S.NameIntroduce>
      </S.Content>
      <S.Content flex="2">
        <S.SkillsWrapper>
          {user.userSkills.map((v) => {
            return <S.SkillImg src={v.url} key={v.id}/>;
          })}
        </S.SkillsWrapper>
      </S.Content>
    </S.RowContentWrapper>
  );
};
export default UserProfile;
