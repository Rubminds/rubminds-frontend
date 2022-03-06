import React from 'react';
import * as S from './style';

import { PostCard } from '../..';

const DibsPosts = ({ Posts }) => {
  return (
    <S.DibsPostsWrapper>
      {Posts.map((v) => {
        return <PostCard post={v} key={v.id}/>;
      })}
    </S.DibsPostsWrapper>
  );
};

export default DibsPosts;
