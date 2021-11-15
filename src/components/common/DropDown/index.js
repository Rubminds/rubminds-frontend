import React, { useState, useCallback } from 'react';
import * as S from './style';

import { FiChevronDown } from 'react-icons/fi';

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  //헤더나 옵션 클릭시 열려진 옵션리스트 닫기용
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  //옵션 선택시 헤더 value 변경 + 토글용
  const onOptionClick = useCallback(
    (option) => () => {
      setSelectedOption(option);
      setIsOpen(false);
    },
    [selectedOption]
  );

  return (
    <S.DropDownContainer>
      <S.DropDownHeader onClick={toggle}>
        {selectedOption} &nbsp;
        <FiChevronDown fontSize="24px" />
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownList>
          {options.map((option, i) => (
            <S.ListItem onClick={onOptionClick}>{option}</S.ListItem>
          ))}
        </S.DropDownList>
      )}
    </S.DropDownContainer>
  );
};
export default DropDown;
