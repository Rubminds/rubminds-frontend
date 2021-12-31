import React from 'react';
import * as S from './style';
import { FaBook } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

const CategoryArea = ({onKindsClick, kinds}) => {
  return (
    <S.CategoryWrapper>
      <S.CategoryCard onClick={onKindsClick('STUDY')} option={'STUDY'} selected={kinds}>
        <FaBook fontSize="3rem" />
        스터디
      </S.CategoryCard>
      <S.CategoryCard onClick={onKindsClick('SCOUT')} option={'SCOUT'} selected={kinds}>
        <MdPersonAdd fontSize="3rem" />
        스카웃
      </S.CategoryCard>
      <S.CategoryCard onClick={onKindsClick('PROJECT')} option={'PROJECT'} selected={kinds}>
        <HiUserGroup fontSize="3rem" />
        프로젝트
      </S.CategoryCard>
    </S.CategoryWrapper>
  );
};

export default CategoryArea;
