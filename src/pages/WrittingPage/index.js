import React, { useState, useCallback } from 'react'
import * as S from './style'
import { MdPersonAdd } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'
import DropDown from '../../components/common/DropDown'
import { LandingDropdownOptions } from '../../constants'
import { AreaOptions } from '../../constants'



const WrittingPage = () => {

  const [recruitType, setRecruitType] = useState(null); 
  const [btnColor, setBtnColor] = useState(['white', 'white', 'white']); 
  const [title, setTitle] = useState(null); 
  const [skillSet, setSkillSet] = useState(null);
  const [meetEnviroment, setMeetEnviroment] = useState(null);
  const [recruitPeople, setRecuitPeople] = useState(null);
  const [area, setArea] = useState(null);
  const [mainText, setMainText] = useState(null);

  const [isScout , setIsScout] = useState(false);

  const onRecruitTypeHandler = useCallback((e)=>{
    setRecruitType(e.target.id);
    switch (e.target.id){
       case 'study' :
         setIsScout(false);
         setBtnColor(['#FBEAFF', 'white', 'white']);
          break;
       case 'scout' :
         setIsScout(true);
         setBtnColor(['white', '#FBEAFF', 'white']);
         break;
       case 'project' :
         setIsScout(false);
         setBtnColor(['white', 'white', '#FBEAFF']);
         break;
    }
  },[btnColor]);

const onTitleHandler = useCallback((e)=>{
  setTitle(e.target.value);
}, [title]);

const onMeetSelectHandler = useCallback((e)=>{
  setMeetEnviroment(e.target.value);
}, [meetEnviroment]);

const onRecruitPeopleHandler = useCallback((e)=> {
    setRecuitPeople(e.target.value);
}, [recruitPeople]);

const onAreaHandler = useCallback((e)=>{
  setArea(e.target.value);
},[area]);

const onMainTextHandler = useCallback((e)=> {
  setMainText(e.target.value);
}, [mainText]);

const onSubmitHandler = (e) => {
  e.preventDefault();

  const formData = new FormData();
  if (recruitPeople){
    formData.append('recruitPeople', recruitPeople);
  }

  formData.append('recruitType', recruitType);
  formData.append('title', title);
  formData.append('meetEnviroment', meetEnviroment);
  formData.append('recruitPeople', recruitPeople);
  formData.append('area', area);
  formData.append('mainText', mainText);
};

  return (
    <S.WrittingBackGround>
      <S.WrittingInnerForm onSubmit={onSubmitHandler}>
        {/* 모집 유형 */}
        <S.MainTitle fontSize="3rem" marginBottom="3%">
          모집 유형
        </S.MainTitle>
        <S.CategoryWrapper>
          <S.CategoryCard id='study' backgroundColor = {btnColor[0]} onClick={onRecruitTypeHandler} >
            <S.Book fontSize="4rem" />
            <S.MainTitle fontSize='1.3rem'>스터디</S.MainTitle>
          </S.CategoryCard>
          <S.CategoryCard id='scout' backgroundColor = {btnColor[1]} onClick={onRecruitTypeHandler} >
            <S.PersonAdd fontSize="4rem" />
            <S.MainTitle fontSize='1.3rem'>스카웃</S.MainTitle>
          </S.CategoryCard>
          <S.CategoryCard id='project' backgroundColor = {btnColor[2]} onClick={onRecruitTypeHandler} >
            <S.UserGroup fontSize="4rem" />
            <S.MainTitle fontSize='1.3rem'>프로젝트</S.MainTitle>
          </S.CategoryCard>
        </S.CategoryWrapper>

        {/* 제목 */}
        <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
          제목
        </S.MainTitle>
        <S.InputBox placeholder="제목을 입력하세요." onChange={onTitleHandler}/>

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
            <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
              회의 환경
            </S.MainTitle>
            <S.RadioWrapper>
              <input id='online' type ='radio' name='env'/><label htmlFor='online'>온라인</label>
              <input id='offline' type ='radio' name='env'/><label htmlFor='offline'>오프라인</label>
              <input id='mix' type ='radio' name='env'/><label htmlFor='mix'>혼합</label>
            </S.RadioWrapper>
          </S.MeetEnviromentWrapper>

          {
            !isScout &&
            (<S.RecruitPeopleWrapper>
            <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
            모집인원
            </S.MainTitle>
            <S.InputBox type='number' min='0' width="30%" onChange={onRecruitPeopleHandler}/>
            <S.InputBoxPeople>명</S.InputBoxPeople>
            </S.RecruitPeopleWrapper>)
          }

        </S.MiddleWrapper>

        {/* 지역 */}
        <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
          지역
        </S.MainTitle>
        <S.AreaSelect onChange={onAreaHandler}>
          <option selected disabled hidden>== 선택 ==</option>
          {AreaOptions.map((value,index) => {
            return <option key={index}>{value}</option>
          })}
        </S.AreaSelect>

        {/* 모집 내용 */}
        <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
          모집 내용
        </S.MainTitle>
        <S.MainTextArea placeholder='프로젝트에 대한 자세한 설명을 부탁드립니다.' onChange={onMainTextHandler}>
        </S.MainTextArea>

        {/* 버튼 */}
        <S.BtnArea>
          <S.BtnLeftArea></S.BtnLeftArea>
          <S.BtnRightArea>
            <S.Btn backgroundColor = 'white' right='10'>취소</S.Btn>
            <S.Btn onClick={onSubmitHandler}>등록하기</S.Btn>
          </S.BtnRightArea>
        </S.BtnArea>

      </S.WrittingInnerForm>
    </S.WrittingBackGround>
  )
}

export default WrittingPage
