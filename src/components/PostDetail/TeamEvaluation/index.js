import React, { useEffect, useCallback, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { evaluateTeamMembers } from '../../../modules/team';
import { Test } from '../../../assets/imgs';

const TeamEvaluation = ({ teamId, writerId }) => {
  const [evaluationArray, setEvaluationArray] = useState([]);
  const [members, setMembers] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/team/${teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const copyArray = response.data.teamUsers.map(v => {
        return { userId: v.userId, attendLevel: 0, workLevel: 0 };
      });
      setMembers(response.data.teamUsers)
      setEvaluationArray(copyArray);
    };
    fetchData();
  }, []);

  const checkInput = useCallback(e => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if (e.target.value > 5 || e.target.value === '.') {
      e.target.value = '';
    }
  }, []);

  const onAttendChange = useCallback(
    (e, i, type) => {
      const copyArray = [...evaluationArray];
      console.log(copyArray);
      type === 'work'
        ? (copyArray[i].workLevel = parseInt(e.target.value))
        : (copyArray[i].attendLevel = parseInt(e.target.value));
      setEvaluationArray(copyArray);
    },
    [evaluationArray],
  );

  const onSubmitClick = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('kinds', 'PROJECT');
    formData.append('evaluation', evaluationArray);
    //console.log(evaluationArray)
    dispatch(evaluateTeamMembers({ teamId, content: formData }));
  }, [evaluationArray]);

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
              &nbsp;{v.userNickname}
              {v.userId === writerId && <S.WriterMark />}
            </S.UserLeftWrapper>
            <S.UserRightWrapper>
              <S.EvaluationContent>
                <S.EvaluationTitle>참여도</S.EvaluationTitle>
                <S.EvaluationLevel
                  onInput={checkInput}
                  maxLength="1"
                  onChange={e => onAttendChange(e, i, 'attend')}
                />
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
                <S.EvaluationLevel
                  onInput={checkInput}
                  maxLength="1"
                  onChange={e => onAttendChange(e, i, 'work')}
                />
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
        <S.SubmitBtn onClick={onSubmitClick}>평가 완료</S.SubmitBtn>
      </S.ContentsWrapper>
    </S.TeamEvaluationWrapper>
  );
};

export default TeamEvaluation;
