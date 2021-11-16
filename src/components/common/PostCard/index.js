import React from 'react';
import * as S from './style';
import { BiStar } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

import { Python } from '../../../assets/imgs';
const PostCard = ({ post, ...props }) => {
  return (
    <S.CardWrapper status={post.status}{...props}>
      <S.CardStatusWrapper status={post.status}>{post.status}</S.CardStatusWrapper>
      <S.CardCategory>
        {post.category === "study" ? <FaBook fontSize="30px" /> : post.category === "scout" ? <MdPersonAdd fontSize="30px" /> : <HiUserGroup fontSize="30px" />}
        </S.CardCategory>
      <S.CardTitle>{post.title}</S.CardTitle>
      <S.CardSkills>
        {post.skills.map((v) => {
          return <Python width="45px" height="45px" />;
        })}
      </S.CardSkills>
      <S.CardFooter>
        <S.FooterTags>
          {post.skills.map((v) => {
            return <S.FooterTag>#{v}&nbsp;</S.FooterTag>;
          })}
        </S.FooterTags>
        <S.DibBtn>
          <BiStar color="#E4DC00"/> <label>찜하기</label>
        </S.DibBtn>
      </S.CardFooter>
    </S.CardWrapper>
  );
};

export default PostCard;
