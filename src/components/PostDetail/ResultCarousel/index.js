import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as S from './style';
import { BsPlusCircleDotted } from 'react-icons/bs';

const ResultCarousel = ({ size, completeImages }) => {
  const [totalImgsNum, setTotalImgsNum] = useState(0); //캐루셀에 담은 이미지 수 -1
  const [currentImg, setCurrentImg] = useState(0); //현재 보여지는 이미지 인덱스
  const CarouselWrapper = useRef(null);

  useEffect(() => {
    CarouselWrapper.current.style.transition = 'all 0.4s ease-in-out';
    CarouselWrapper.current.style.transform = `translateX(-${currentImg}00%)`;
  }, [currentImg]);

  useEffect(() => {
    completeImages.length > 0 && setTotalImgsNum(completeImages.length - 1);
  }, [completeImages]);

  //next버튼 클릭시
  const nextClick = useCallback(() => {
    if (currentImg >= totalImgsNum) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentImg(0); // 1번째 사진으로
    } else {
      setCurrentImg(currentImg + 1);
    }
  }, [currentImg, totalImgsNum]);

  // Prev 버튼 클릭 시
  const prevClick = useCallback(() => {
    if (currentImg === 0) {
      // 첫번째 사진일 때
      setCurrentImg(totalImgsNum); // 마지막 사진으로
    } else {
      setCurrentImg(currentImg - 1);
    }
  }, [currentImg, totalImgsNum]);

  return (
    <S.CarouselContainer size={size}>
      {completeImages.length !== 0 && (
        <>
          <S.CarouselPrev onClick={prevClick} />
          <S.CarouselNext onClick={nextClick} />
        </>
      )}
      <S.CarouselWrapper ref={CarouselWrapper}>
        {completeImages.length === 0 ? (
          <S.AddImgCard size={size} htmlFor="input-img">
            <input
              type="file"
              multiple="multiple"
              id="input-img"
              accept="image/*"
              style={{ display: 'none' }}
              disabled
            />
            <BsPlusCircleDotted />
            이미지 추가
          </S.AddImgCard>
        ) : (
          completeImages.map((v, i) => {
            return (
              <S.CarouselContent size={size} key={i}>
                <S.CarouselImg src={v} size={size} />
              </S.CarouselContent>
            );
          })
        )}
      </S.CarouselWrapper>
    </S.CarouselContainer>
  );
};
export default ResultCarousel;
