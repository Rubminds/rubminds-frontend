import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';

import { PostCard } from '../..';

const BannerCarousel = ({ posts }) => {
  //첫 렌더링 때는 posts가 안들어오고, 왼쪽버튼 누르면 상태바뀌면서 리렌더링 되면서 그때부터는 데이터가 들어와서 제대로 동작
  const CarouselWrapper = useRef(null);
  const [currentPost, setcurrentPost] = useState(0);
  const totalPosts = posts.length - 1; //이미지 개수-1

  useEffect(() => {
    CarouselWrapper.current.style.transition = 'all 0.3s ease-in-out';
    CarouselWrapper.current.style.transform = `translateX(-${currentPost}0%)`;
  }, [currentPost]);

  const nextClick = useCallback(() => {
    console.log(posts);
    if (currentPost >= totalPosts) {
      setcurrentPost(0);
    } else {
      setcurrentPost(currentPost + 1);
    }
  }, [currentPost]);

  const prevClick = useCallback(() => {
    console.log(posts);
    console.log(totalPosts);
    if (currentPost === 0) {
      setcurrentPost(totalPosts); // 마지막 사진으로
    } else {
      setcurrentPost(currentPost - 1);
    }
  }, [currentPost]);

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
