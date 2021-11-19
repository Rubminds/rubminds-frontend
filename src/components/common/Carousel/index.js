import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as S from './style';

import { Test, Test1, Test2 } from '../../../assets/imgs';

const Carousel = ({size}) => {
  //추후 props로 이미지 url 담긴 배열 받아서 처리
  const CarouselWrapper = useRef(null);
  const [currentImg, setCurrentImg] = useState(0);
  const totalImgs = 5; //이미지 개수-1
  useEffect(() => {
    CarouselWrapper.current.style.transition = 'all 0.4s ease-in-out';
    CarouselWrapper.current.style.transform = `translateX(-${currentImg}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentImg]);
  const nextClick = useCallback(() => {
    if (currentImg >= totalImgs) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentImg(0); // 1번째 사진으로
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
    <S.CarouselContainer size={size}>
      <S.CarouselPrev onClick={prevClick} />
      <S.CarouselNext onClick={nextClick} />
      <S.CarouselWrapper ref={CarouselWrapper}>
        <S.CarouselImg src={Test} size={size}/>
        <S.CarouselImg src={Test1} size={size} />
        <S.CarouselImg src={Test2} size={size} />
        <S.CarouselImg src={Test2} size={size} />
        <S.CarouselImg src={Test1} size={size} />
        <S.CarouselImg src={Test} size={size} />
      </S.CarouselWrapper>
    </S.CarouselContainer>
  );
};
export default Carousel;
