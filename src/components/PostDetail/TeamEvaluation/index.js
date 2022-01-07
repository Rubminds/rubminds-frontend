import React, { useEffect, useCallback } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';

import { loadTeamMembers } from '../../../modules/team';
import { Test } from '../../../assets/imgs';

const TeamEvaluation = ({ teamId, writerId }) => {
  const dispatch = useDispatch();
  const { members } = useSelector(state => state.team);

  useEffect(() => {
    dispatch(loadTeamMembers(teamId));
  }, []);

  const checkInput = useCallback(e => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if (e.target.value > 5 || e.target.value === '.') {
      e.target.value = '';
    }
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
      <S.ContentsWrapper>
        {members.map((v, i) => (
          <S.UserWrapper key={i}>
            <S.UserLeftWrapper>
              <S.UserAvatar src={Test} />
              &nbsp;{v.userNickname}{v.userId === writerId && <S.WriterMark/>}
            </S.UserLeftWrapper>
            <S.UserRightWrapper>
              <S.EvaluationContent>
                <S.EvaluationTitle>참여도</S.EvaluationTitle>
                <S.EvaluationLevel onInput={checkInput} maxLength="1" />
                <S.EvaluationStars>
                  <S.Star />
                  <S.Star />
                  <S.Star />
                  <S.Star />
                  <S.Star />
                </S.EvaluationStars>
              </S.EvaluationContent>
              <S.EvaluationContent>
                <S.EvaluationTitle>숙련도</S.EvaluationTitle>
                <S.EvaluationLevel />
                <S.EvaluationStars>
                  <S.Star />
                  <S.Star />
                  <S.Star />
                  <S.Star />
                  <S.Star />
                </S.EvaluationStars>
              </S.EvaluationContent>
            </S.UserRightWrapper>
          </S.UserWrapper>
        ))}
        <S.SubmitBtn>평가 완료</S.SubmitBtn>
      </S.ContentsWrapper>
    </S.TeamEvaluationWrapper>
  );
};

export default TeamEvaluation;
