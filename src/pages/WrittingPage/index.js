import React, { useState, useCallback } from 'react'
import * as S from './style'
import { FaBook } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'
import DropDown from '../../components/common/DropDown'
import { LandingDropdownOptions } from '../../constants'
import { AreaOptions } from '../../constants'

const WrittingPage = () => {

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
        <DropDown
          style={{ width: '100%' }}
          options={LandingDropdownOptions}
        ></DropDown>

        <S.MiddleWrapper>
          {/* 회의 환경 */}
          <S.MeetEnviromentWrapper>
            <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
              회의 환경
            </S.MainTitle>
            <S.MeetSelect>
              <option>온라인</option>
              <option>오프라인</option>
              <option>혼합</option>
              <option>상관없음</option>
            </S.MeetSelect>
          </S.MeetEnviromentWrapper>

          {/* 모집인원 */}
          <S.RecruitPeopleWrapper>
            <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
              모집인원
            </S.MainTitle>
            <S.InputBox width="30%"></S.InputBox> <span>명</span>
          </S.RecruitPeopleWrapper>
        </S.MiddleWrapper>

        {/* 지역 */}
        <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
          지역
        </S.MainTitle>
        <S.AreaSelect>
          {AreaOptions.map(v => {
            return <option>{v}</option>
          })}
        </S.AreaSelect>

        {/* 모집 내용 */}
        <S.MainTitle fontSize="30px" marginTop="5%" marginBottom="3%">
          모집 내용
        </S.MainTitle>
        <S.MainTextArea placeholder='프로젝트에 대한 자세한 설명을 부탁드립니다.'>
        </S.MainTextArea>

        {/* 버튼 */}
        <S.BtnArea>
          <S.BtnLeftArea></S.BtnLeftArea>
          <S.BtnRightArea>
            <S.Btn backgroundColor = 'white' right='10'>취소</S.Btn>
            <S.Btn>등록하기</S.Btn>
          </S.BtnRightArea>
        </S.BtnArea>

      </S.WrittingInnerForm>
    </S.WrittingBackGround>
  )
}

export default WrittingPage
