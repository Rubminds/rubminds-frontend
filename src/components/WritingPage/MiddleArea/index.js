import React, { useCallback } from 'react';
import * as S from '../WrittingInnerForm/style';

const MiddleArea = ({
  meeting,
  setMeeting,
  headCount,
  setHeadCount,
  isScout,
}) => {
  const onMeetingChange = useCallback(
    e => {
      setMeeting(e.target.value);
    },
    [meeting]
  );

  const onHeadCountChange = useCallback(
    e => {
      console.log(e.target.value);
      const { value } = e.currentTarget;
      const onlyNumber = value
        .replace(/[^0-9.]/g, '')
        .replace(/(\.*)\./g, '$1');
      setHeadCount(onlyNumber);
    },
    [headCount]
  );
  const blockText = useCallback(e => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
  }, []);

  return (
    <>
      <S.MiddleWrapper>
        <S.MeetEnviromentWrapper>
          <S.SectionTitle>
            회의 환경
          </S.SectionTitle>
          <S.RadioWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meeting"
                value="ONLINE"
                id="ONLINE"
                type="radio"
                onChange={onMeetingChange}
                required="required"
              />
              <label htmlFor="ONLINE">온라인</label>
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meeting"
                value="OFFLINE"
                id="OFFLINE"
                type="radio"
                onChange={onMeetingChange}
              />
              <label htmlFor="OFFLINE">오프라인</label>
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meeting"
                value="BOTH"
                id="BOTH"
                type="radio"
                onChange={onMeetingChange}
              />
              <label htmlFor="BOTH">혼합</label>
            </S.CheckBoxWrapper>
          </S.RadioWrapper>
        </S.MeetEnviromentWrapper>

        <S.RecruitPeopleWrapper>
          {!isScout && (
            <>
              <S.SectionTitle fontSize="3rem" marginBottom="13%">
                모집 인원
              </S.SectionTitle>
              <S.InputWrapper>
                <S.InputBox
                  width="15rem"
                  name="headcount"
                  type="number"
                  onInput={blockText}
                  onChange={onHeadCountChange}
                  required="required"
                />
                <S.InputBoxPeople>명</S.InputBoxPeople>
              </S.InputWrapper>
            </>
          )}
        </S.RecruitPeopleWrapper>
      </S.MiddleWrapper>
    </>
  );
};

export default MiddleArea;
