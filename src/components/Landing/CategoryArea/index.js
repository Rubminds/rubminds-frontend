import React from 'react';
import * as S from './style';
import { FaBook } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

const CategoryArea = () => {
  return (
    <S.CategoryWrapper>
      <S.CategoryCard>
        <FaBook fontSize="3rem" />
        스터디
      </S.CategoryCard>
      <S.CategoryCard>
        <MdPersonAdd fontSize="3rem" />
        스카웃
      </S.CategoryCard>
      <S.CategoryCard>
        <HiUserGroup fontSize="3rem" />
        프로젝트
      </S.CategoryCard>
    </S.CategoryWrapper>
  );
};

export default CategoryArea;
