import React, { useCallback } from 'react';
import * as S from './style';
import { BiStar } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { MdPersonAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { Python } from '../../../assets/imgs';
import { likePost } from '../../../modules/post';

const PostCard = ({ post, ...props }) => {
  const combinedSkills = post.skill.concat(post.customSkills);
  const dispatch = useDispatch();
  // const onLikeClick = useCallback(
  //   e => {
  //     e.preventDefault();
  //     dispatch(likePost(post.id));
  //   },
  //   [dispatch, post.id],
  // );
  return (
    <S.CardLinkWrapper to={`post/${post.id}`}>
      <S.CardWrapper status={post.status} {...props}>
        <S.CardStatusWrapper status={post.status}>진행 종료</S.CardStatusWrapper>
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
            {combinedSkills?.map((v, i) => {
              return <S.FooterTag key={`footerskills${i}`}>#{v}&nbsp;</S.FooterTag>;
            })}
          </S.FooterTags>
          {post.isLike ? (
            <S.DibBtn>
              <AiFillStar color="#E4DC00" />찜 취소
            </S.DibBtn>
          ) : (
            <S.DibBtn>
              <BiStar color="#E4DC00" />
              찜하기
            </S.DibBtn>
          )}
        </S.CardFooter>
      </S.CardWrapper>
    </S.CardLinkWrapper>
  );
};

export default PostCard;
