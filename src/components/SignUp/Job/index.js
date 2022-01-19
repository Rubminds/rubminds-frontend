import React from 'react';
import * as S from '../SignUpPageRight/style';

const Job = ({ job, setJob }) => {
  return (
    <>
      <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem">
        직업
      </S.MainTitle>
      <S.JobWrapper>
        <S.JobCheckBtn
          value="학생"
          name="학생"
          type="button"
          onClick={e => {
            setJob(e.target.name);
          }}
          selected={job}
        />
        <S.JobCheckBtn
          value="직장인"
          name="직장인"
          type="button"
          onClick={e => {
            setJob(e.target.name);
          }}
          selected={job}
        />
      </S.JobWrapper>
    </>
  );
};

export default Job;
