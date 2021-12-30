import React from 'react'
import axios from 'axios'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import * as S from './style'

import { DropDown } from '../../../components'
import useInput from '../../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../../../modules/user'
import { useHistory } from 'react-router-dom'

const SignUpPageRight = () => { 

  const isSigninDone = useSelector((state) => state.user.isSigninDone); 

  const history = useHistory()
  const dispatch = useDispatch()
  const { accessToken, signupCheck } = useParams()
  const imgInput = useRef()
  const [dropDownOptions, setDropDownOptions] = useState([])
  const [nickname, onChangeNickname] = useInput('')

  const [job, onChangeJob, setJob] = useInput('')
  const [introduce, onChangeIntroduce] = useInput(null)

  const [attachMent, setAttachment] = useState(null)
  const [fileInfo, setFileInfo] = useState(null) // img URL (for Server)

  const [skill, setSkill] = useState(); 
  const [skillId, setSkillId] = useState([])
  const [skillName, setSkillName] = useState([])

  useEffect(()=>{
    localStorage.setItem('accessToken', accessToken); 
    localStorage.setItem('signupCheck', signupCheck);
  },[]); 

  useEffect(()=> {
    if(isSigninDone){
      history.push('/'); 
    }

  }, [isSigninDone, signupCheck]); 

  
  useEffect(async() => {
    const result = await axios.get('https://dev.rubminds.site/api/skills', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })

    let temp = result.data.skills;
    setSkill(temp); 
      temp.map((value) => {
        skillName.push(value.name) 
      })
  }, [])

  useEffect(()=>{
    if (skill != 'undefined' && skill != null){
      let index = skill.findIndex(v=>v.name == dropDownOptions[dropDownOptions.length-1]);
      skillId.push(skill[index].id);
    }
  },[dropDownOptions]);

  const onProfileUpload = useCallback(() => {
    imgInput.current.click()
  }, [])

  const onProfileURL = useCallback(
    e => {
      let reader = new FileReader()
      setFileInfo(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = finished => {
        setAttachment(finished.target.result)
        e.target.value = ''
      }
    },
    [attachMent, fileInfo]
  )

  const onDeleteURL = useCallback(() => {
    setFileInfo(null)
    setAttachment(null)
  }, [fileInfo, attachMent])

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault(); 
      console.log(skillId);
      let data = {
        nickname : nickname, 
        job : job, 
        introduce : introduce,
        skillIds : skillId,
      };
      const formData = new FormData()
      if (fileInfo) {
        formData.append('avatar', fileInfo)
      }
      formData.append('userInfo',  new Blob([JSON.stringify(data)], {type: "application/json"}))
      dispatch(signupUser(formData)); 
    },
    [attachMent, nickname, job, dropDownOptions, introduce]
  )
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
              />
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

        <S.MainTitle
          marginTop="7.5%"
          marginBottom="7.5%"
          fontSize="2rem"
          aquired
        >
          닉네임
        </S.MainTitle>
        <S.NickNameWrapper>
          <S.NickNameBox name="nickName" onChange={onChangeNickname} required />
          <S.CheckBox>
            중복 체크
          </S.CheckBox>
        </S.NickNameWrapper>

        {/* 직업 */}
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem">
          직업
        </S.MainTitle>
        <S.JobWrapper>
          <S.JobCheckBtn
            name="학생"
            onClick={e => {
              setJob(e.target.name)
              e.preventDefault()
            }}
            name={'학생'}
            selected={job}
          >
            학생
          </S.JobCheckBtn>
          <S.JobCheckBtn
            name="직장인"
            onClick={e => {
              setJob(e.target.name)
              e.preventDefault()
            }}
            name={'직장인'}
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
        <S.MainTitle
          marginTop="7.5%"
          marginBottom="7.5%"
          fontSize="2rem"
          aquired
        >
          자기소개
        </S.MainTitle>
        <S.Introduce onChange={onChangeIntroduce} />
        <S.SubmitBtn onClick={onSubmitHandler}>회원 가입</S.SubmitBtn>
        <S.Clear></S.Clear>
      </S.SignUpPageInnerForm>
    </S.SignUpPageRightWrapper>
  )
}

export default SignUpPageRight
