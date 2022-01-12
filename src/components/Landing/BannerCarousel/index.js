import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';

import { PostCard } from '../..';

const BannerCarousel = ({ posts }) => {
  const CarouselWrapper = useRef(null);
  const [currentPost, setcurrentPost] = useState(0);
  const totalPosts = posts.length - 1; //이미지 개수-1

  useEffect(() => {
    CarouselWrapper.current.style.transition = 'all 0.3s ease-in-out';
    CarouselWrapper.current.style.transform = `translateX(-${currentPost}00%)`;
  }, [currentPost]);

  const nextClick = useCallback(() => {
    if (currentPost >= totalPosts) {
      setcurrentPost(0);
    } else {
      setcurrentPost((prev) => prev + 1);
      
    }
  }, [currentPost,totalPosts]);

  const prevClick = useCallback(() => {
    if (currentPost === 0) {
      setcurrentPost(totalPosts); // 마지막 사진으로
    } else {
      setcurrentPost((prev)=> prev - 1);
    }
  }, [currentPost,totalPosts]);

  return (
    <S.CarouselContainer>
      <S.CarouselPrev onClick={prevClick} />
      <S.CarouselNext onClick={nextClick} />
      <S.CarouselWrapper ref={CarouselWrapper}>
        {posts.map(v => {
          return <PostCard post={v} key={`carousel${v.id}`} />;
        })}
      </S.CarouselWrapper>
    </S.CarouselContainer>
  );
};

export default BannerCarousel;
