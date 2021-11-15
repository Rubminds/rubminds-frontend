import React from 'react';
import * as S from './style';
import {BiStar} from 'react-icons/bi'

import { Python } from '../../../assets/imgs';
const PostCard = ({ post }) => {
  return (
    <S.CardWrapper>
      <S.CardCategory>{post.category}</S.CardCategory>
      <br />
      <S.CardTitle>{post.title}</S.CardTitle>
      <S.CardSkills>
        {post.skills.map((v) => {
          return <Python width="30px" height="30px" />;
        })}
      </S.CardSkills>
      <S.CardFooter>
        <S.FooterTags>
          {post.skills.map((v) => {
            return <S.FooterTag>#{v}</S.FooterTag>;
          })}
        </S.FooterTags>
          <S.DibBtn>
            <BiStar/> 찜하기
          </S.DibBtn>
      </S.CardFooter>
    </S.CardWrapper>
  );
};

export default PostCard;
