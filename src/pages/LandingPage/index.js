import React, { useState, useCallback } from 'react';
import * as S from './style';
import { BsCheckLg } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

import { Banner,PostCard } from '../../components';
const LandingPage = () => {
  const [isCheck, setIsCheck] = useState(true);
  const Posts = [
    { category: 'study', title: '알고리즘 공부 하실분', skills: ['python', 'javascript'] },
    { category: 'scout', title: '저좀 데려가실분', skills: ['react', 'javascript','redux'] },
    { category: 'project', title: '웹 프로젝트 인원 구해요', skills: ['react', 'javascript'] },
    { category: 'project', title: '웹 프론트엔드 프로젝트 인원 구해요', skills: ['react', 'javascript'] },
  ];
  const onCheck = useCallback(() => {
    setIsCheck((prev) => !prev);
  }, []);
  return (
    <>
      <S.LandingWrapper>
        <Banner />
        <S.LandingDetailWrapper>
          <S.TitleWrapper>
            <S.DetailTitle>
              어떤 동료를 찾으시나요? &nbsp;
              <S.CheckboxText>
                <S.StyledCheckbox onClick={onCheck}>{isCheck && <BsCheckLg />}</S.StyledCheckbox>
                <S.CheckboxText>전체보기</S.CheckboxText>
              </S.CheckboxText>
            </S.DetailTitle>
          </S.TitleWrapper>
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
          <S.FilterWrapper></S.FilterWrapper>
          <S.PostsWrapper>
            {
              Posts.map((v,i) =>{
                return <PostCard post={v} key={i}/>
              })
            }
          </S.PostsWrapper>
        </S.LandingDetailWrapper>
      </S.LandingWrapper>
    </>
  );
};

export default LandingPage;
