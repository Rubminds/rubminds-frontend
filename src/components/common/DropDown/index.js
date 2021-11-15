import React, { useState, useCallback } from 'react';
import * as S from './style';

const DropDown = ({ options, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  //헤더나 옵션 클릭시 열려진 옵션리스트 닫기용
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  },[]);

  //옵션 선택시 헤더 value 변경 + 토글용
  const onOptionClick = useCallback(
    (option) => () => {
      setSelectedOptions(selectedOptions.concat(option));
      setIsOpen(false);
    },
    [selectedOptions]
  );

  const onDeleteClick = useCallback(
    (option) => () => {
      setSelectedOptions(
        selectedOptions.filter(
          (
            i //이름이 인자로 받은 option이 아니면 새로 구성
          ) => i !== option
        )
      );
    },
    [selectedOptions]
  );

  //중복된 값 안받게 예외처리 해주어야 함.
  return (
    <S.DropDownContainer {...props}>
      <S.DropDownHeader onClick={toggle}>
        {selectedOptions.map((v) => {
          return (
            <S.HeaderTag onClick={onDeleteClick(v)}>
              {v}
            </S.HeaderTag>
          );
        })}{' '}
        &nbsp;
        <S.HeaderArrow />
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownList>
          {options.map((option, i) => (
            <S.ListItem onClick={onOptionClick(option)}>{option}</S.ListItem>
          ))}
        </S.DropDownList>
      )}
    </S.DropDownContainer>
  );
};
export default DropDown;
