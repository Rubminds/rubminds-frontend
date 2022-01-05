import React, { useEffect } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';

import { loadTeamMembers } from '../../../modules/team';
import { Test } from '../../../assets/imgs';

const TeamEvaluation = ({ teamId }) => {
  const dispatch = useDispatch();
  const { members } = useSelector(state => state.team);

  useEffect(() => {
    dispatch(loadTeamMembers(teamId));
  }, []);

  return (
    <S.TeamEvaluationWrapper>
      <S.TitleWrapper>
        <S.MainTitle>팀원 평가</S.MainTitle>
        <S.SubTitle>
          팀원 평가는 팀원의 마이페이지에 반영됩니다. <br />
          신중하고 솔직한 평가 부탁드려요!
        </S.SubTitle>
      </S.TitleWrapper>
      {members.map((v, i) => (
        <S.UserWrapper key={i}>
          <S.UserAvatar src={Test} />
          {v.userNickname}
        </S.UserWrapper>
      ))}
    </S.TeamEvaluationWrapper>
  );
};

export default TeamEvaluation;
