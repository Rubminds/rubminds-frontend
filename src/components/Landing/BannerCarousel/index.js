import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';

import { PostCard } from '../..';
const BannerCarousel = () => {
  const Posts = [
    { id:1, category: 'study', status:'모집중', title: '알고리즘 공부 하실분', skills: ['python', 'javascript'] },
    { id:2, category: 'scout', status:'진행종료', title: '저좀 데려가실분', skills: ['react', 'javascript', 'redux'] },
    { id:3, category: 'project', status:'진행중', title: '웹 프로젝트 인원 구해요', skills: ['react', 'javascript'] },
    {
      id:4, category: 'project',
      status:'모집중', title: '웹 프론트엔드 프로젝트 인원 구해요. 2줄이상 테스트 하는중입니다. 2줄이상 테스트 하는중입니다. 2줄이상 테스트 하는중입니다',
      skills: ['react', 'javascript'],
    },
    { id:5, category: 'study', status:'진행종료', title: '알고리즘 공부 하실분', skills: ['python', 'javascript'] },
    { id:6, category: 'scout', status:'진행중', title: '저좀 데려가실분', skills: ['react', 'javascript', 'redux'] },
    { id:7, category: 'project', status:'모집중', title: '웹 프로젝트 인원 구해요', skills: ['react', 'javascript'] },
    { id:8, category: 'project', status:'진행종료', title: '웹 프로젝트 인원 구해요', skills: ['react', 'javascript'] },
    { id:9, category: 'project', status:'모집중', title: '웹 프로젝트 인원 구해요', skills: ['react', 'javascript'] },
    { id:10, category: 'project', status:'모집중', title: '웹 프로젝트 인원3 구해요', skills: ['react', 'javascript'] },
  ];
  //추후 props로 이미지 url 담긴 배열 받아서 처리
  const CarouselWrapper = useRef(null);
  const [currentImg, setCurrentImg] = useState(0);
  const totalImgs = Posts.length-1; //이미지 개수-1
  useEffect(() => {
    CarouselWrapper.current.style.transition = 'all 0.3s ease-in-out';
    CarouselWrapper.current.style.transform = `translateX(-${currentImg}0%)`; 
  }, [currentImg]);
  const nextClick = useCallback(() => {
    if (currentImg >= totalImgs) {
      setCurrentImg(0); 
    } else {
      setCurrentImg(currentImg + 1);
    }
  }, [currentImg]);
  // Prev 버튼 클릭 시
  const prevClick = useCallback(() => {  
    if (currentImg === 0) {
      setCurrentImg(totalImgs); // 마지막 사진으로
    } else {
      setCurrentImg(currentImg - 1);
    }
  }, [currentImg]);
  return (
    <S.CarouselContainer>
      <S.CarouselPrev onClick={prevClick} />
      <S.CarouselNext onClick={nextClick} />
      <S.CarouselWrapper ref={CarouselWrapper}>
        {Posts.map((v) => {
          return <PostCard post={v} key={v.id} />;
        })}
      </S.CarouselWrapper>
    </S.CarouselContainer>
  );
};

export default BannerCarousel;
