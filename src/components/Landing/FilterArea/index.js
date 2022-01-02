import React from 'react';
import * as S from './style';
import { BiBorderAll } from 'react-icons/bi';
import { FaMedal } from 'react-icons/fa';

import { LandingDropdownOptions, AreaOptions } from '../../../constants';
import { CustomDropDown } from '../..';

const FilterArea = ({
  dropDownOptions,
  setDropDownOptions,
  customOptions,
  setCustomOptions,
  onPostStatusClick,
  postStatus,
}) => {
  return (
    <S.FilterWrapper>
      <S.DetailTitle>어떤 기술을 찾으시나요?</S.DetailTitle>
      <CustomDropDown
        options={LandingDropdownOptions}
        marginTop="5rem"
        dropDownOptions={dropDownOptions}
        setDropDownOptions={setDropDownOptions}
        customOptions={customOptions}
        setCustomOptions={setCustomOptions}
      />
      <S.SortWrapper>
        <S.AreaSelect name="area" defaultValue={'선택'}>
          <option value="선택" disabled>
            선택
          </option>
          {AreaOptions.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </S.AreaSelect>
        <S.SortOptionWrapper>
          <S.SortOption
            onClick={onPostStatusClick('RECRUIT')}
            option={'RECRUIT'}
            selected={postStatus}
          >
            <BiBorderAll fontSize="2rem" />
            모집중
          </S.SortOption>
          <S.SortOption
            onClick={onPostStatusClick('FINISHED')}
            option={'FINISHED'}
            selected={postStatus}
          >
            <FaMedal fontSize="2rem" />
            진행완료
          </S.SortOption>
        </S.SortOptionWrapper>
      </S.SortWrapper>
    </S.FilterWrapper>
  );
};

export default FilterArea;
