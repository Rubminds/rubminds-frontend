import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import * as S from './style';
import { DropDown } from '../../../components';
import { LandingDropdownOptions } from '../../../constants';

const SignUpPageRight = () => {
  useEffect(() => {
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);
    return () => {
      localStorage.setItem('signupCheck', signupCheck);
    };
  }, []);

  const { accessToken, signupCheck } = useParams();
  const imgInput = useRef();
  const [dropDownOptions, setDropDownOptions] = useState([]);

  const [nickName, setNickName] = useState(null);
  const [job, setJob] = useState(null);
  const [skillSet, setSkillSet] = useState([]);
  const [introduce, setIntroduce] = useState(null);

  const [studentBtnColor, setStudentBtnColor] = useState(null);
  const [officerBtnColor, setOfficerBtnColor] = useState(null);

  // attachment : img URL (for Server)
  const [attachMent, setAttachment] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);

  const onChangeNickName = useCallback(e => {
    setNickName(e.target.value);
  }, []);

  const onChangeJob = useCallback(e => {
    e.preventDefault();
    setJob(e.target.name);
    console.log(e.target.name);
    if (e.target.name === 'student') {
      setStudentBtnColor('#CDF6E8');
      setOfficerBtnColor(null);
    } else {
      setStudentBtnColor(null);
      setOfficerBtnColor('#CDF6E8');
    }
  }, []);

  const onChangeIntroducer = useCallback(e => {
    setIntroduce(e.target.value);
  }, []);

  const onProfileUpload = useCallback(() => {
    imgInput.current.click();
  }, []);

  const onProfileURL = useCallback(e => {
    let reader = new FileReader()
    setFileInfo(e.target.files[0])
    reader.readAsDataURL(e.target.files[0])
    reader.onloadend = finished => {
      setAttachment(finished.target.result)
      e.target.value ='';
    }
  }, [attachMent, fileInfo])

  const onDeleteURL = useCallback(() => {
    setFileInfo(null)
    setAttachment(null)
  }, [fileInfo, attachMent])

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      alert(`attachMent : ${attachMent}
          nickName : ${nickName} 
          job : ${job} 
          skillSet : ${skillSet}
          introduce : ${introduce} `);

      const formData = new FormData();
      if (fileInfo) {
        formData.append('profileImg', fileInfo);
      }

      formData.append('nickName', nickName);
      formData.append('job', job);
      formData.append('skillSet', skillSet);
      formData.append('introduce', introduce);
    },
    [attachMent, nickName, job, skillSet, introduce],
  );
  return (
    <S.SignUpPageRightWrapper>
      <S.MainTitle fontSize="5rem" fontWeight="bold">
        Sign Up
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
          <S.NickNameBox name="nickName" onChange={onChangeNickName} required />
          <S.CheckBox
            onClick={() => {
              alert('중복체크 중!');
            }}
          >
            중복 체크
          </S.CheckBox>
        </S.NickNameWrapper>

        {/* 직업 */}
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem">
          직업
        </S.MainTitle>
        <S.JobWrapper>
          <S.JobCheckBtn name="student" backgroundColor={studentBtnColor} onClick={onChangeJob}>
            학생
          </S.JobCheckBtn>
          <S.JobCheckBtn name="officer" backgroundColor={officerBtnColor} onClick={onChangeJob}>
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
          options={LandingDropdownOptions}
        ></DropDown>

        {/* 자기소개 */}
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem" aquired>
          자기소개
        </S.MainTitle>
        <S.Introduce onChange={onChangeIntroducer} />
        <S.SubmitBtn onClick={onSubmitHandler}>회원 가입</S.SubmitBtn>
        <S.Clear></S.Clear>
      </S.SignUpPageInnerForm>
    </S.SignUpPageRightWrapper>
  );
};

export default SignUpPageRight;
