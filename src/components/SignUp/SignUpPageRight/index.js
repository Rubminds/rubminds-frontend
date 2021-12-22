import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import * as S from './style';

import { DropDown } from '../../../components';
import { LandingDropdownOptions } from '../../../constants';
import useInput from '../../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { SIGNUP_USER } from '../../../constants';
import { signupUserAPI } from '../../../modules/user/saga';

const SignUpPageRight = () => {

  const dispatch = useDispatch(); 

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    return () => {
      localStorage.setItem('signupCheck', signupCheck);
    };
  }, []);

  const { accessToken, signupCheck } = useParams();
  const imgInput = useRef();
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [nickname, onChangeNickname] = useInput('');

  const [job, onChangeJob, setJob] = useInput('');
  const [introduce, onChangeIntroduce] = useInput(null);

  // attachment : img URL (for Server)
  const [attachMent, setAttachment] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);

  const onProfileUpload = useCallback(() => {
    imgInput.current.click();
  }, []);

  const onProfileURL = useCallback(
    e => {
      let reader = new FileReader();
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
      
      console.log(`attachMent : ${attachMent}
          nickName : ${nickname} 
          job : ${job} 
          skillSet : ${dropDownOptions}
          introduce : ${introduce} `);

      const formData = new FormData();
      if (fileInfo) {
        formData.append('profileImg', fileInfo);
      }

      formData.append('nickName', nickname);
      formData.append('job', job);
      formData.append('skillSet', dropDownOptions);
      formData.append('introduce', introduce);

      dispatch(signupUserAPI(formData))
      .then((res)=>{
        console.log('성공')
      }).catch((e)=> console.log(e)); 

    },
    [attachMent, nickname, job, dropDownOptions, introduce],
  )
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
          <S.NickNameBox name="nickName" onChange={onChangeNickname} required />
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
          <S.JobCheckBtn
            name="student"
            onClick={e => setJob(e.target.name)}
            name={'student'}
            selected={job}
          >
            학생
          </S.JobCheckBtn>
          <S.JobCheckBtn
            name="officer"
            onClick={e => setJob(e.target.name)}
            name={'officer'}
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
          options={LandingDropdownOptions}
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
