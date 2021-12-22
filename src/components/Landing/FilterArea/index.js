import React from 'react';
import * as S from './style';
import { BiBorderAll } from 'react-icons/bi';
import { FaMedal } from 'react-icons/fa';

import { LandingDropdownOptions, AreaOptions } from '../../../constants';
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
        <S.AreaSelect name="area" defaultValue={'선택'}>
          <option value="선택" disabled>
            선택
          </option>
          {AreaOptions.map((option, index) => {
            return <option key={index} value={option}>{option}</option>;
          })}
        </S.AreaSelect>
        <S.SortOptionWrapper>
          <S.SortOption onClick={onRecruitOptionClick}>
            <BiBorderAll fontSize="2rem" />
            모집중
          </S.SortOption>
          <S.SortOption onClick={onFinishOptionClick}>
            <FaMedal fontSize="2rem" />
            진행완료
          </S.SortOption>
        </S.SortOptionWrapper>
      </S.SortWrapper>
    </S.FilterWrapper>
  );
};

export default FilterArea;
