import React from 'react';
import * as S from './style';
import { BiBorderAll } from 'react-icons/bi';
import { FaMedal } from 'react-icons/fa';

import { LandingDropdownOptions } from '../../../constants';
import { DropDown } from '../..';

const FilterArea = ({
  dropDownOptions,
  setDropDownOptions,
  onRecruitOptionClick,
  onFinishOptionClick,
}) => {
  return (
    <S.FilterWrapper>
      <S.DetailTitle>어떤 기술을 찾으시나요?</S.DetailTitle>
      <DropDown
        options={LandingDropdownOptions}
        marginTop="5rem"
        dropDownOptions={dropDownOptions}
        setDropDownOptions={setDropDownOptions}
      />
      <S.SortWrapper>
        <S.SortOption onClick={onRecruitOptionClick}>
          <BiBorderAll fontSize="2rem" />
          모집중
        </S.SortOption>
        <S.SortOption onClick={onFinishOptionClick}>
          <FaMedal fontSize="2rem" />
          진행완료
        </S.SortOption>
      </S.SortWrapper>
    </S.FilterWrapper>
  );
};

export default FilterArea;
