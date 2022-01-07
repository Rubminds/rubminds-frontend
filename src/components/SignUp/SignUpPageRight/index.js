import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import * as S from './style'
import { DropDown } from '../../../components'
import useInput from '../../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { signupUser } from '../../../modules/user'
import { useHistory } from 'react-router-dom'
import { SKILL_ID } from '../../../constants'
import Nickname from '../NickName'
import Job from '../Job'
import Avatar from '../Avatar'
import Introduce from '../Introduce'

const SignUpPageRight = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [nicknameCheck, setnicknameCheck] = useState(false)

  const [dropDownOptions, setDropDownOptions] = useState([])
  const [nickname, onChangeNickname, setNickname] = useInput('')
  const [job, onChangeJob, setJob] = useInput('')
  const [introduce, onChangeIntroduce] = useInput(null)
  const [fileInfo, setFileInfo] = useState(null)
  const [skillName, setSkillName] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/skills', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      })
      setSkillName(result.data.skills.map(e => e.name))
    }
    fetchData()
  }, [])

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault()
      
      if(nicknameCheck){
        const data = {
          nickname: nickname,
          job: job,
          introduce: introduce,
          skillIds: dropDownOptions.map(option => SKILL_ID[option]),
        }
        console.log(data); 
        const formData = new FormData()
        if (fileInfo) {
          formData.append('avatar', fileInfo)
        }
        formData.append(
          'userInfo',
          new Blob([JSON.stringify(data)], { type: 'application/json' })
        )
        dispatch(signupUser(formData))
        history.push('/') 
      }
      else{
        alert('닉네임 중복체크를 해주세요')
      }
    },
    [nickname, job, dropDownOptions, introduce, dispatch, fileInfo]
  )

  return (
    <S.SignUpPageRightWrapper>
      <S.MainTitle fontSize="5rem" fontWeight="bold">
        Sign Up
      </S.MainTitle>

      <S.SignUpPageInnerForm onSubmit={onSubmitHandler}>
        <Avatar fileInfo={fileInfo} setFileInfo={setFileInfo} />
        <Nickname
          nickname={nickname}
          setNickname={setNickname}
          setnicknameCheck={setnicknameCheck}
        />
        <Job job={job} setJob={setJob} />
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem">
          기술 스택
        </S.MainTitle>
        <DropDown
          dropDownOptions={dropDownOptions}
          setDropDownOptions={setDropDownOptions}
          style={{ width: '100%' }}
          options={skillName}
        ></DropDown>

        <Introduce onChangeIntroduce={onChangeIntroduce} />
        <S.SubmitBtn onClick={onSubmitHandler}>회원 가입</S.SubmitBtn>
        <S.Clear></S.Clear>
      </S.SignUpPageInnerForm>
    </S.SignUpPageRightWrapper>
  )
}

export default SignUpPageRight
