import React, { useEffect, useState, useRef, useCallback } from 'react'
import * as S from './style'
import { useParams } from 'react-router'
import { CgProfile } from 'react-icons/cg'
import { DropDown } from '../../components'

import {LandingDropdownOptions} from '../../constants'; 

const SignUp = () => {


  useEffect(() => {
    localStorage.setItem('accessToken', accessToken)
    return () => {
      localStorage.setItem('signupCheck', signupCheck)
    }
  }, [])

  const imgInput = useRef()
  const { accessToken, signupCheck } = useParams()

  // attachment : img URL (for Server)
  const [attachMent, setAttachment] = useState(null)
  const [fileInfo, setFileInfo] = useState(null)
  const [body, setBody] = useState({
    profileSrc: null,
    nickName: null,
    job: null,
    skillSet: null,
    introduce: null,
  })

  const onProfileUpload = useCallback(() => {
    imgInput.current.click()
  }, [])

  const onProfileURL = useCallback((e)=>{
    const reader = new FileReader()
    setFileInfo(e.target.files[0])
    reader.readAsDataURL(e.target.files[0]) 
    reader.onloadend = (finished) => {
      setAttachment(finished.target.result) 
    }
  }, []); 

  const onDeleteURL = useCallback(() => {
    setAttachment(''); 
  }); 

  const onBodyChange = (e)=>{
    setBody({
      ...body,
      [e.target.name] : e.target.value
    }) 
  };

  const onSubmitHandler = (e) =>{
    e.preventDefault(); 
    console.log('제출');
  }

  return (
    <>
      <S.SignUpPageWrapper>
        <S.SignUpPageLeft>
          <S.MainTitle color="white" fontSize="50px">
            당신의 개발 동료를 찾아 줄 최고의 온라인 커뮤니티
          </S.MainTitle>
          <S.MainTitle
            style={{ marginTop: '50px' }}
            color="white"
            fontSize="30px"
          >
            Rubminds에서 당신의 팀원을 찾으세요!
          </S.MainTitle>
        </S.SignUpPageLeft>
        <S.SignUpPageRight>
          <S.MainTitle fontSize="50px" fontWeight="bold">
            Sign Up
          </S.MainTitle>

          <S.SignUpPageInnerForm>
            <S.ProfileWrapper>
              {attachMent ? (
                <>
                  <img src={attachMent} width="100px"  style={{display : 'block', borderRadius:'5000px'}}/>
                  <S.CheckBox onClick={onDeleteURL}>X</S.CheckBox>
                </>
              ) : (
                <CgProfile size="100" onClick={onProfileUpload} />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={onProfileURL}
                hidden
                ref={imgInput}
              />
            </S.ProfileWrapper>
            
            {/* 닉네임 */}
            <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="20px">
              닉네임
            </S.MainTitle>
            <S.NickNameBox name='nickName' onChange={setBody} />
            <S.CheckBox onClick={()=>{alert('중복체크 중!')}}>중복 체크</S.CheckBox>
            
            {/* 신분 */}
            <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="20px">
              신분
            </S.MainTitle>
            <S.JobWrapper>
              <S.JobCheckBtn>학생</S.JobCheckBtn>
              <S.JobCheckBtn>직장인</S.JobCheckBtn>
            </S.JobWrapper>

            {/* 기술 스택 */}
            <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="20px">
              기술 스택
            </S.MainTitle>
            <DropDown style={{width : '100%'}} options={LandingDropdownOptions}></DropDown>


          {/* 자기소개 */}
          <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="20px"> 자기소개</S.MainTitle>
            <S.Introduce />

          <S.SubmitBtn onClick={onSubmitHandler}>회원 가입</S.SubmitBtn>
            
          </S.SignUpPageInnerForm>
        </S.SignUpPageRight>
      </S.SignUpPageWrapper>
    </>
  )
}

export default SignUp
