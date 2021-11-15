import React from 'react';
import * as S from './style';

const PostCard = ({post}) => {
  return (
  <S.CardWrapper>
      <S.CardCategory>{post.category}</S.CardCategory>
      <S.CardTitle>{post.title}</S.CardTitle>
      <S.CardSkills>
          {
          post.skills.map((v)=> {
              return (<div>{v}</div>)
            }
            )
          }
    </S.CardSkills>
      <S.CardFooter></S.CardFooter>
  </S.CardWrapper>)
};

export default PostCard;
