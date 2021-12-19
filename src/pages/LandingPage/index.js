import React, { useState, useCallback } from 'react';
import * as S from './style';
import { BsCheckLg } from 'react-icons/bs';

import { Banner, PostCard, Footer, FilterArea, CategoryArea } from '../../components';

const LandingPage = () => {
  const [isCheck, setIsCheck] = useState(true);
  const [sortOption, setSortOption] = useState('모집중');
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const Posts = [
    {
      id: 1,
      category: 'study',
      status: '모집중',
      title: '알고리즘 공부 하실분',
      skills: ['python', 'javascript'],
    },
    {
      id: 2,
      category: 'scout',
      status: '진행종료',
      title: '저좀 데려가실분',
      skills: ['react', 'javascript', 'redux'],
    },
    {
      id: 3,
      category: 'project',
      status: '진행중',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 4,
      category: 'project',
      status: '모집중',
      title:
        '웹 프론트엔드 프로젝트 인원 구해요. 2줄이상 테스트 하는중입니다. 2줄이상 테스트 하는중입니다. 2줄이상 테스트 하는중입니다',
      skills: ['react', 'javascript'],
    },
    {
      id: 5,
      category: 'study',
      status: '진행종료',
      title: '알고리즘 공부 하실분',
      skills: ['python', 'javascript'],
    },
    {
      id: 6,
      category: 'scout',
      status: '진행중',
      title: '저좀 데려가실분',
      skills: ['react', 'javascript', 'redux'],
    },
    {
      id: 7,
      category: 'project',
      status: '모집중',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 8,
      category: 'project',
      status: '진행종료',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 9,
      category: 'project',
      status: '모집중',
      title: '웹 프로젝트 인원 구해요',
      skills: ['react', 'javascript'],
    },
    {
      id: 10,
      category: 'project',
      status: '모집중',
      title: '웹 프로젝트 인원3 구해요',
      skills: ['react', 'javascript'],
    },
  ];
  const onCheck = useCallback(() => {
    setIsCheck(prev => !prev);
  }, []);
  const onRecruitOptionClick = useCallback(() => {
    setSortOption('모집중');
  });
  const onFinishOptionClick = useCallback(() => {
    setSortOption('진행종료');
  });

  return (
    <>
      <S.LandingWrapper>
        <Banner />
        <S.LandingDetailWrapper>
          <S.TitleWrapper>
            <S.DetailTitle>어떤 동료를 찾으시나요? &nbsp;</S.DetailTitle>
            <S.CheckboxWrapper>
              <S.StyledCheckbox onClick={onCheck}>{isCheck && <BsCheckLg />}</S.StyledCheckbox>
              &nbsp;전체보기
            </S.CheckboxWrapper>
          </S.TitleWrapper>
          <CategoryArea />
          <FilterArea
            dropDownOptions={dropDownOptions}
            setDropDownOptions={setDropDownOptions}
            onRecruitOptionClick={onRecruitOptionClick}
            onFinishOptionClick={onFinishOptionClick}
          />
          <S.PostsWrapper>
            {Posts.map(v => {
              return v.status === sortOption && <PostCard post={v} key={v.id} />;
            })}
          </S.PostsWrapper>
        </S.LandingDetailWrapper>
        <Footer />
      </S.LandingWrapper>
    </>
  );
};

export default LandingPage;
