import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'

import * as S from './style'
import DropDown from '../../../components/common/DropDown'
import { LandingDropdownOptions } from '../../../constants'
import { AreaOptions } from '../../../constants'
import { Link } from 'react-router-dom'

const WrittingInnerForm = () => {
  const [skill, setSkill] = useState()
  const [skillId, setSkillId] = useState([])
  const [skillName, setSkillName] = useState([])
  const [dropDownOptions, setDropDownOptions] = useState([])
  const [btnColor, setBtnColor] = useState(['#FBEAFF', 'white', 'white'])
  const [isScout, setIsScout] = useState(false)
  // 이미지 서버 전송용 데이터
  const [fileInfo, setFileInfo] = useState(null)
  // 이미지 미리보기 데이터
  const [attachment, setAttachment] = useState(null)

  useEffect(async () => {
    const result = await axios.get('https://dev.rubminds.site/api/skills', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })

    let temp = result.data.skills
    setSkill(temp)
    temp.map(value => {
      skillName.push(value.name)
    })
  }, [])

  useEffect(() => {
    if (skill != 'undefined' && skill != null) {
      let index = skill.findIndex(
        v => v.name == dropDownOptions[dropDownOptions.length - 1]
      )
      skillId.push(skill[index].id)
    }
  }, [dropDownOptions])


  const deleteImg = useCallback(() => {
    setFileInfo('')
    setAttachment('')
  }, [])

  const blockText = useCallback(e => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1')
  }, [])

  const [body, setBody] = useState({
    title: null,
    content: null,
    headcount: null,
    kinds: 'STUDY',
    meeting: null,
    region: null,
    file: null,
  })

  const onBodyChange = useCallback(
    e => {
      if (e.target.getAttribute('name') === 'kinds') {
        setBody({
          ...body,
          [e.target.getAttribute('name')]: e.target.getAttribute('value'),
        })
        switch (e.target.getAttribute('value')) {
          case 'STUDY':
            setIsScout(false)
            setBtnColor(['#FBEAFF', 'white', 'white'])
            break
          case 'SCOUT':
            setIsScout(true)
            setBtnColor(['white', '#FBEAFF', 'white'])
            break
          case 'PROJECT':
            setIsScout(false)
            setBtnColor(['white', 'white', '#FBEAFF'])
            break
        }
      }
      if (e.target.name === 'file') {
        let reader = new FileReader()
        setFileInfo(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = finished => {
          setAttachment(finished.target.result)
          e.target.value = ''
        }
        setBody({
          ...body,
          [e.target.name]: fileInfo,
        })
      }

      if (e.target.name === 'headcount') {
        const { value } = e.currentTarget
        const onlyNumber = value
          .replace(/[^0-9.]/g, '')
          .replace(/(\.*)\./g, '$1')
        setBody({
          ...body,
          [e.target.name]: onlyNumber,
        })
      }

      setBody({
        ...body,
        [e.target.name]: e.target.value,
      })
    },
    [
      body.meeting,
      body.title,
      body.skillSet,
      body.meetEnviroment,
      body.headcount,
      body.region,
      body.file,
      body.content,
    ]
  )

  const onSubmitHandler = e => {
    e.preventDefault()

    console.log(body);
    console.log(skillId); 

    const formData = new FormData()
    if (body.headcount) {
      formData.append('headcount', parseInt(body.headcount))
    }
    if (body.file) {
      formData.append('files',body.file)
    }
    let data = {
      title : body.title, 
      content : body.content,
      headcount : body.headcount, 
      kinds : body.kinds,
      meeting : body.meeting, 
      region : body.region, 
      skillIds : skillId,
      customSkillName : ['python'],
    }

    formData.append('postInfo',  new Blob([JSON.stringify(data)], {type: "application/json"}))

    axios.post('https://dev.rubminds.site/api/post', formData , {
      headers : {
        Authorization : 'Bearer ' +  localStorage.getItem('accessToken')
      }
    }).then((res)=> console.log(res.data)).catch((e)=> console.log(e)); 
// 
  }

  return (
    <S.WrittingInnerForm onSubmit={onSubmitHandler}>
      {/* 모집 유형 */}
      <S.MainTitle fontSize="3rem" marginBottom="3%">
        모집 유형
      </S.MainTitle>
      <S.CategoryWrapper>
        <S.CategoryCard
          name="kinds"
          value="STUDY"
          backgroundColor={btnColor[0]}
          onClick={onBodyChange}
        >
          <S.Book fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스터디</S.MainTitle>
        </S.CategoryCard>
        <S.CategoryCard
          name="kinds"
          value="SCOUT"
          backgroundColor={btnColor[1]}
          onClick={onBodyChange}
        >
          <S.PersonAdd fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스카웃</S.MainTitle>
        </S.CategoryCard>
        <S.CategoryCard
          name="kinds"
          value="PROJECT"
          backgroundColor={btnColor[2]}
          onClick={onBodyChange}
        >
          <S.UserGroup fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">프로젝트</S.MainTitle>
        </S.CategoryCard>
      </S.CategoryWrapper>

      {/* 제목 */}
      <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        제목
      </S.MainTitle>
      <S.InputBox
        name="title"
        placeholder="제목을 입력하세요."
        onChange={onBodyChange}
      />

      {/* 기술 스택 */}
      <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        기술 스택
      </S.MainTitle>
      <DropDown
        dropDownOptions={dropDownOptions}
        setDropDownOptions={setDropDownOptions}
        style={{ width: '100%' }}
        options={skillName}
      ></DropDown>

      <S.MiddleWrapper>
        {/* 회의 환경 */}
        <S.MeetEnviromentWrapper>
          <S.MainTitle fontSize="3rem" marginBottom="11%">
            회의 환경
          </S.MainTitle>
          <S.RadioWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meeting"
                value="ONLINE"
                id="ONLINE"
                type="radio"
                onChange={onBodyChange}
              />
              <label htmlFor="ONLINE">온라인</label>
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meeting"
                value="OFFLINE"
                id="OFFLINE"
                type="radio"
                onChange={onBodyChange}
              />
              <label htmlFor="OFFLINE">오프라인</label>
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meeting"
                value="BOTH"
                id="BOTH"
                type="radio"
                onChange={onBodyChange}
              />
              <label htmlFor="BOTH">혼합</label>
            </S.CheckBoxWrapper>
          </S.RadioWrapper>
        </S.MeetEnviromentWrapper>

        <S.RecruitPeopleWrapper>
          {!isScout && (
            <>
              <S.MainTitle fontSize="3rem" marginBottom="13%">
                모집 인원
              </S.MainTitle>
              <S.InputWrapper>
                <S.InputBox
                  width="15rem"
                  name="headcount"
                  type="number"
                  onInput={blockText}
                  onChange={onBodyChange}
                />
                <S.InputBoxPeople>명</S.InputBoxPeople>
              </S.InputWrapper>
            </>
          )}
        </S.RecruitPeopleWrapper>
      </S.MiddleWrapper>

      {/* 지역 */}
      <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        지역
      </S.MainTitle>
      <S.AreaSelect name="region" onChange={onBodyChange}>
        <option value="" selected disabled hidden>
          == 선택 ==
        </option>
        {AreaOptions.map((value, index) => {
          return <option key={index}>{value}</option>
        })}
      </S.AreaSelect>

      <S.FileWrapper>
        <S.FileLeft>
          <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="6%">
            참고 자료
          </S.MainTitle>

          <S.FileInput htmlFor="input-file">업로드</S.FileInput>
          <input
            name="file"
            type="file"
            id="input-file"
            style={{ display: 'none' }}
            onChange={onBodyChange}
          />
        </S.FileLeft>
        <S.FileRight>
          {attachment && (
            <img src={attachment} width="100%" onClick={deleteImg} />
          )}
        </S.FileRight>
      </S.FileWrapper>
      {/* 모집 내용 */}
      <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        모집 내용
      </S.MainTitle>
      <S.MainTextArea
        name="content"
        placeholder="프로젝트에 대한 자세한 설명을 부탁드립니다."
        onChange={onBodyChange}
      ></S.MainTextArea>

      <S.BtnWrapper>
        <S.BtnLeft>
          <Link to="/">취소</Link>
        </S.BtnLeft>
        <S.BtnRight onClick={onSubmitHandler}>등록하기</S.BtnRight>
      </S.BtnWrapper>
    </S.WrittingInnerForm>
  )
}

export default WrittingInnerForm
