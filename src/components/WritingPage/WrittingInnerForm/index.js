import React, { useState, useCallback } from 'react'
import * as S from './style'
import DropDown from '../../../components/common/DropDown'
import { LandingDropdownOptions } from '../../../constants'
import { AreaOptions } from '../../../constants'
import { Link } from 'react-router-dom'

const WrittingInnerForm = () => {
  const [btnColor, setBtnColor] = useState(['#FBEAFF', 'white', 'white'])
  const [isScout, setIsScout] = useState(false)

  // 이미지 서버 전송용 데이터
  const [fileInfo, setFileInfo] = useState(null)

  // 이미지 미리보기 데이터
  const [attachment, setAttachment] = useState(null)

  const deleteImg = useCallback(() => {
    setFileInfo('')
    setAttachment('')
  }, [])

  const blockText = useCallback((e)=>{
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
  }, []); 

  const [body, setBody] = useState({
    recruitType: 'study',
    title: null,
    skillSet: null,
    meetEnviroment: null,
    recruitPeople: null,
    area: null,
    file: null,
    mainText: null,
  })

  const onBodyChange = useCallback(
    e => {
      if (e.target.getAttribute('name') === 'recruitType') {
        setBody({
          ...body,
          [e.target.getAttribute('name')]: e.target.getAttribute('value'),
        })
        switch (e.target.getAttribute('value')) {
          case 'study':
            setIsScout(false)
            setBtnColor(['#FBEAFF', 'white', 'white'])
            break
          case 'scout':
            setIsScout(true)
            setBtnColor(['white', '#FBEAFF', 'white'])
            break
          case 'project':
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

      if (e.target.name === 'recruitPeople') {
        const { value } = e.currentTarget;
        const onlyNumber = value.replace(/[^0-9.]/g, '').replace(/(\.*)\./g, '$1')
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
      body.recruitType,
      body.title,
      body.skillSet,
      body.meetEnviroment,
      body.recruitPeople,
      body.area,
      body.file,
      body.mainText,
    ]
  )

  const onSubmitHandler = e => {
    e.preventDefault()

    const formData = new FormData()
    if (body.recruitPeople) {
      formData.append('recruitPeople', body.recruitPeople)
    }
    formData.append('recruitType', body.recruitType)
    formData.append('title', body.title)
    formData.append('meetEnviroment', body.meetEnviroment)
    formData.append('recruitPeople', body.recruitPeople)
    formData.append('area', body.area)
    formData.append('mainText', body.mainText)
  }

  return (
    <S.WrittingInnerForm onSubmit={onSubmitHandler}>
      {/* 모집 유형 */}
      <S.MainTitle fontSize="3rem" marginBottom="3%">
        모집 유형
      </S.MainTitle>
      <S.CategoryWrapper>
        <S.CategoryCard
          name="recruitType"
          value="study"
          backgroundColor={btnColor[0]}
          onClick={onBodyChange}
        >
          <S.Book fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스터디</S.MainTitle>
        </S.CategoryCard>
        <S.CategoryCard
          name="recruitType"
          value="scout"
          backgroundColor={btnColor[1]}
          onClick={onBodyChange}
        >
          <S.PersonAdd fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스카웃</S.MainTitle>
        </S.CategoryCard>
        <S.CategoryCard
          name="recruitType"
          value="project"
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
        style={{ width: '100%' }}
        options={LandingDropdownOptions}
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
                name="meetEnviroment"
                value="online"
                id="online"
                type="radio"
                onChange={onBodyChange}
              />
              <label htmlFor="online">온라인</label>
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meetEnviroment"
                value="offline"
                id="offline"
                type="radio"
                onChange={onBodyChange}
              />
              <label htmlFor="offline">오프라인</label>
            </S.CheckBoxWrapper>
            <S.CheckBoxWrapper>
              <input
                name="meetEnviroment"
                value="mix"
                id="mix"
                type="radio"
                onChange={onBodyChange}
              />
              <label htmlFor="mix">혼합</label>
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
                name="recruitPeople"
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
      <S.AreaSelect name="area" onChange={onBodyChange}>
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
        name="mainText"
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
