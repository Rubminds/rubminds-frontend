import React,{useState,useCallback} from 'react';
import * as S from './style';
import {BsCheckLg} from 'react-icons/bs'
import {FaBook} from 'react-icons/fa'
import {MdPersonAdd} from 'react-icons/md'
import {HiUserGroup} from 'react-icons/hi'

import { Banner } from '../../components';
const LandingPage = () => {
  const [isCheck, setIsCheck] = useState(true);
  const onCheck= useCallback(()=>{
    setIsCheck((prev) => !prev);
  },[])
  return (
    <>
      <S.LandingWrapper>
        <Banner />
        <S.LandingDetailWrapper>
          <S.TitleWrapper>
            <S.DetailTitle>
              어떤 동료를 찾으시나요? &nbsp;
              <S.CheckboxText>
                <S.StyledCheckbox onClick={onCheck}>{isCheck && <BsCheckLg/>}</S.StyledCheckbox>
                <S.CheckboxText>전체보기</S.CheckboxText>
              </S.CheckboxText>
            </S.DetailTitle>
          </S.TitleWrapper>
          <S.CategoryWrapper>
            <S.CategoryCard><FaBook fontSize="30px"/>스터디</S.CategoryCard>
            <S.CategoryCard><MdPersonAdd fontSize="30px"/>스카웃</S.CategoryCard>
            <S.CategoryCard><HiUserGroup fontSize="30px"/>프로젝트</S.CategoryCard>
          </S.CategoryWrapper>
        </S.LandingDetailWrapper>
      </S.LandingWrapper>
    </>
  );
};

export default LandingPage;
