import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { CgProfile } from 'react-icons/cg';
import * as S from './style';

import { DropDown } from '../../../components';
import useInput from '../../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../../modules/user';
import { useHistory } from 'react-router-dom';
import { SKILL_ID } from '../../../constants';

const SignUpPageRight = () => {
  const isSignupDone = useSelector(state => state.user.isSignupDone);
  const history = useHistory();
  const dispatch = useDispatch();
  const imgInput = useRef();
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [nickname, onChangeNickname] = useInput('');

  const [job, onChangeJob, setJob] = useInput('');
  const [introduce, onChangeIntroduce] = useInput(null);

  // attachment : img URL (for Server)
  const [attachMent, setAttachment] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);

  const [skillName, setSkillName] = useState([]);

  useEffect(() => {
    if (isSignupDone) {
      history.push('/');
    }
  }, [isSignupDone]);
 

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://dev.rubminds.site/api/skills', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      });
      setSkillName(result.data.skills.map(e => e.name));
    };
    fetchData();
  }, []);

  const onProfileUpload = useCallback(() => {
    imgInput.current.click();
  }, []);

  const onProfileURL = useCallback(
    e => {
      const reader = new FileReader();
      setFileInfo(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = finished => {
        setAttachment(finished.target.result);
        e.target.value = '';
      };
    },
    [attachMent, fileInfo],
  );

  const onDeleteURL = useCallback(() => {
    setFileInfo(null);
    setAttachment(null);
  }, [fileInfo, attachMent]);

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      const data = {
        nickname: nickname,
        job: job,
        introduce: introduce,
        skillIds: dropDownOptions.map(option => SKILL_ID[option]),
      };
      const formData = new FormData();
      if (fileInfo) {
        formData.append('avatar', fileInfo);
      }
      formData.append('userInfo', new Blob([JSON.stringify(data)], { type: 'application/json' }));
      console.log(data);
      dispatch(signupUser(formData));
    },
    [nickname, job, dropDownOptions, introduce, dispatch, fileInfo],
  );
  return (
    <S.SignUpPageRightWrapper>
      <S.MainTitle fontSize="5rem" fontWeight="bold">
        회원 가입
      </S.MainTitle>

      <S.SignUpPageInnerForm onSubmit={onSubmitHandler}>
        <S.ProfileWrapper>
          {attachMent ? (
            <>
              <img
                src={attachMent}
                width="150px"
                style={{ display: 'block', borderRadius: '5000px' }}
                onClick={onDeleteURL}
                alt=""
              />
            </>
          ) : (
            <CgProfile size="100" onClick={onProfileUpload} />
          )}
          <input type="file" accept="image/*" onChange={onProfileURL} hidden ref={imgInput} />
        </S.ProfileWrapper>

        {/* 닉네임 */}

        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem" aquired>
          닉네임
        </S.MainTitle>
        <S.NickNameWrapper>
          <S.NickNameBox name="nickName" onChange={onChangeNickname} required />
          <S.CheckBox>중복 체크</S.CheckBox>
        </S.NickNameWrapper>

        {/* 직업 */}
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem">
          직업
        </S.MainTitle>
        <S.JobWrapper>
          <S.JobCheckBtn
            name="학생"
            onClick={e => {
              setJob(e.target.name);
              e.preventDefault();
            }}
            selected={job}
          >
            학생
          </S.JobCheckBtn>
          <S.JobCheckBtn
            name="직장인"
            onClick={e => {
              setJob(e.target.name);
              e.preventDefault();
            }}
            selected={job}
          >
            직장인
          </S.JobCheckBtn>
        </S.JobWrapper>

        {/* 기술 스택 */}
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem">
          기술 스택
        </S.MainTitle>
        <DropDown
          dropDownOptions={dropDownOptions}
          setDropDownOptions={setDropDownOptions}
          style={{ width: '100%' }}
          options={skillName}
        ></DropDown>

        {/* 자기소개 */}
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem" aquired>
          자기소개
        </S.MainTitle>
        <S.Introduce onChange={onChangeIntroduce} />
        <S.SubmitBtn onClick={onSubmitHandler}>회원 가입</S.SubmitBtn>
        <S.Clear></S.Clear>
      </S.SignUpPageInnerForm>
    </S.SignUpPageRightWrapper>
  );
};

export default SignUpPageRight;