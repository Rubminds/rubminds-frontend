import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as S from './style';
import { BsPlusCircleDotted } from 'react-icons/bs';

const UploadCarousel = ({ size, setImages }) => {
  const [carouselImgs, setCarouselImgs] = useState([]); //캐루셀에 담긴 이미지들
  const [totalImgsNum, setTotalImgsNum] = useState(0); //캐루셀에 담은 이미지 수 -1
  const [currentImg, setCurrentImg] = useState(0); //현재 보여지는 이미지 인덱스
  const CarouselWrapper = useRef(null);

  useEffect(() => {
    CarouselWrapper.current.style.transition = 'all 0.4s ease-in-out';
    CarouselWrapper.current.style.transform = `translateX(-${currentImg}00%)`;
  }, [currentImg]);

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

  //캐루셀에 이미지들 추가
  const addImgs = useCallback(e => {
    const SelectedImgList = e.target.files; //선택한 이미지들
    setImages(SelectedImgList);
    const currentImgsURLList = [];
    for (let i = 0; i < SelectedImgList.length; i += 1) {
      const currentImgURL = URL.createObjectURL(SelectedImgList[i]);
      currentImgsURLList.push(currentImgURL); //빈 배열에 각 이미지 주소 담음
    }
    setCarouselImgs(currentImgsURLList); //Imgs를 갱신
    setTotalImgsNum(currentImgsURLList.length - 1);
  }, [setImages]);

  return (
    <S.CarouselContainer size={size}>
      {carouselImgs.length !== 0 && (
        <>
          <S.CarouselPrev onClick={prevClick} />
          <S.CarouselNext onClick={nextClick} />
        </>
      )}
      <S.CarouselWrapper ref={CarouselWrapper}>
        {carouselImgs.length === 0 ? (
          <S.AddImgCard size={size} onChange={addImgs} htmlFor="input-img">
            <input
              type="file"
              multiple="multiple"
              id="input-img"
              accept=".png, .jpg, .jpeg, .svg"
              style={{ display: 'none' }}
            />
            <BsPlusCircleDotted />
            이미지 추가
          </S.AddImgCard>
        ) : (
          carouselImgs.map((v, i) => {
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
export default UploadCarousel;
