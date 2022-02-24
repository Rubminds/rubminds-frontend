import React, { useState, useCallback } from 'react';
import * as S from './style';

import { AreaOptions } from '../../../constants';

const AreaDropdown = ({ region, onRegionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  //헤더나 옵션 클릭시 열려진 옵션리스트 닫기용
  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <S.DropDownContainer isOpen={isOpen} onClick={toggle}>
      <S.DropDownHeader>
        {region || '지역'}  
        <S.HeaderArrow />
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownList>
          <S.ListItem key={'none'} onClick={onRegionClick('')}>
            전체
          </S.ListItem>
          {AreaOptions.map((option, i) => (
            <S.ListItem key={i} onClick={onRegionClick(option)}>
              {option}
            </S.ListItem>
          ))}
        </S.DropDownList>
      )}
    </S.DropDownContainer>
  );
};
export default AreaDropdown;
