import React from 'react';
import * as S from './style';

import { Test } from '../../../assets/imgs';

const UserProfile = ({ me }) => {
  return (
    <S.RowContentWrapper>
      <S.Avatar src={Test}  />
      <S.Content flex="5">
        <S.NameIntroduce>
          <S.Name>{me.name}</S.Name>
          <S.Introduce>{me.introduce}</S.Introduce>
        </S.NameIntroduce>
      </S.Content>
      <S.Content flex="2">
        <S.SkillsWrapper>
          {me.skills.map((v, i) => {
            return <S.SkillImg src={v} key={i}/>;
          })}
        </S.SkillsWrapper>
      </S.Content>
    </S.RowContentWrapper>
  );
};
export default UserProfile;
