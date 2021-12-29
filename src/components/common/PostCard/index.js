import React from 'react';
import * as S from './style';
import { BiStar } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

import { Python } from '../../../assets/imgs';
const PostCard = ({ post, ...props }) => {
  return (
    <S.CardLinkWrapper to={`post/${post.id}`}>
      <S.CardWrapper status={post.status} {...props}>
        <S.CardStatusWrapper status={post.status}>{post.status}</S.CardStatusWrapper>
        <S.CardCategory>
          {post.kinds === 'STUDY' ? (
            <FaBook fontSize="30px" />
          ) : post.kinds === 'SCOUT' ? (
            <MdPersonAdd fontSize="30px" />
          ) : (
            <HiUserGroup fontSize="30px" />
          )}
        </S.CardCategory>
        <S.CardTitle>{post.title}</S.CardTitle>
        <S.CardSkills>
          {post.skill?.map((v, i) => {
            return <Python width="45px" height="45px" key={`postskills${i}`} />;
          })}
        </S.CardSkills>
        <S.CardFooter status={post.status}>
          <S.FooterTags>
            {post.skill?.map((v, i) => {
              return <S.FooterTag key={`footerskills${i}`}>#{v}&nbsp;</S.FooterTag>;
            })}
          </S.FooterTags>
          <S.DibBtn>
            <BiStar color="#E4DC00" /> <label>찜하기</label>
          </S.DibBtn>
        </S.CardFooter>
      </S.CardWrapper>
    </S.CardLinkWrapper>
  );
};

export default PostCard;
