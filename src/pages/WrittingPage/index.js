import React, { useState, useCallback } from 'react'
import * as S from './style'
import { FaBook } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'
import DropDown from '../../components/common/DropDown'
import { LandingDropdownOptions } from '../../constants'

const WrittingPage = () => {

  // const [checkInputs, setCheckInputs] = useState([]); 
  
  // const onChekedHandler = useCallback((checked, id)=> {
  //   if (checked){
  //     setCheckInputs([]); 
  //   }
  // },[]);

  return (
    <S.WrittingBackGround>
      <S.WrittingInnerForm>
        
        {/* 모집 유형 */}
        <S.MainTitle fontSize="30px" marginBottom="3%">
          모집 유형
        </S.MainTitle>
        <S.CategoryWrapper>
          <S.CategoryCard>
            <FaBook fontSize="30px" />
            스터디
          </S.CategoryCard>
          <S.CategoryCard>
            <MdPersonAdd fontSize="30px" />
            스카웃
          </S.CategoryCard>
          <S.CategoryCard>
            <HiUserGroup fontSize="30px" />
            프로젝트
          </S.CategoryCard>
        </S.CategoryWrapper>

        {/* 제목 */}
        <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
          제목
        </S.MainTitle>
        <S.InputBox placeholder="제목을 입력하세요." />


        {/* 기술 스택 */}
        <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
          기술 스택
        </S.MainTitle>
        <DropDown style={{width : '100%'}} options = {LandingDropdownOptions}></DropDown> 


        <S.MiddleWrapper>
          {/* 회의 환경 */}
          <S.MeetEnviroment>
            <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
                회의 환경
            </S.MainTitle>
            <select style={{width : '100%', padding : '20px', borderRadius : '30px', fontSize : '20px'}}>
              <option>온라인</option>
              <option>오프라인</option>
              <option>혼합</option>
              <option>상관없음</option>
            </select>
           
            {/* <S.EnviromentCheck id='offline' type='radio'/> <label htmlFor='offline'>오프라인</label>
            <S.EnviromentCheck id='mix' type='radio'/> <label htmlFor='mix'>혼합</label> */}


          </S.MeetEnviroment>
          {/* 모집인원 */}
          <S.RecruitPeopleWrapper>
            <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
                 모집인원
              </S.MainTitle>  
              <S.InputBox width="30%"></S.InputBox> <span>명</span>
          </S.RecruitPeopleWrapper>
        </S.MiddleWrapper>

      </S.WrittingInnerForm>
    </S.WrittingBackGround>
  )
}

export default WrittingPage
