import React, { useEffect, useCallback, useState } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { evaluateTeamMembers } from '../../../modules/team';

const TeamEvaluation = ({ teamId, writerId, kinds, postId, me }) => {
  const [evaluationArray, setEvaluationArray] = useState([]);
  const [members, setMembers] = useState([]);
  const dispatch = useDispatch();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/team/${teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setMembers(response.data.teamUsers);
      console.log(response.data)
      const copyArray = response.data.teamUsers.map(v => {
        me.id === v.userId && v.finish && setIsFinished(true);
        return { userId: v.userId, attendLevel: 0, workLevel: 0 };
      });
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
      type === 'work'
        ? (copyArray[i].workLevel = parseInt(e.target.value))
        : (copyArray[i].attendLevel = parseInt(e.target.value));
      setEvaluationArray(copyArray);
    },
    [evaluationArray],
  );

  const onSubmitClick = useCallback(
    e => {
      e.preventDefault();
      const obj = {
        kinds,
        evaluation: evaluationArray.length === 1 ? [] :evaluationArray,
      };
      console.log(evaluationArray);
      dispatch(evaluateTeamMembers({ teamId, content: obj }));
      window.location.replace(`/post/${postId}`);
    },
    [evaluationArray, dispatch, kinds, teamId, postId],
  );

  return (
    <S.TeamEvaluationWrapper>
      <S.TitleWrapper>
        <S.MainTitle>팀원 평가</S.MainTitle>
        <S.SubTitle>
          {isFinished ? (
            <>
              모든 팀원이 평가를 완료할 때 까지 <br />
              기다려주세요!
            </>
          ) : (
            <>
              팀원 평가는 팀원의 마이페이지에 반영됩니다.
              <br />
              신중하고 솔직한 평가 부탁드려요!
            </>
          )}
        </S.SubTitle>
      </S.TitleWrapper>
      <S.ContentsWrapper>
        {members.map(
          (v, i) =>
            v.userId !== me.id && (
              <S.UserWrapper key={i}>
                <S.UserLeftWrapper>
                  <S.UserAvatar src={v.avatar} />
                  &nbsp;{v.userNickname}
                  {v.userId === writerId && <S.WriterMark />}
                </S.UserLeftWrapper>
                {!isFinished && (
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
                    {kinds !== 'STUDY' && (
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
                    )}
                  </S.UserRightWrapper>
                )}
              </S.UserWrapper>
            ),
        )}
        <S.SubmitBtn onClick={onSubmitClick} isFinished={isFinished} disabled={isFinished}>
          평가 완료
        </S.SubmitBtn>
      </S.ContentsWrapper>
    </S.TeamEvaluationWrapper>
  );
};

export default TeamEvaluation;
