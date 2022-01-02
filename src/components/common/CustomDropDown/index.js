import React, { useState, useCallback } from 'react';
import * as S from './style';

const DropDown = ({
  dropDownOptions,
  setDropDownOptions,
  customOptions,
  setCustomOptions,
  options,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserInputOpen, setIsUserInputOpen] = useState(false);

  //헤더나 옵션 클릭시 열려진 옵션리스트 닫기용
  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const getTotalLength = useCallback(() => {
    return dropDownOptions.length + customOptions.length;
  }, [dropDownOptions, customOptions]);

  //옵션 선택시 헤더 value 변경 + 토글용
  const onOptionClick = useCallback(
    option => () => {
      if (getTotalLength() < 5) {
        if (!dropDownOptions.includes(option)) {
          setDropDownOptions(dropDownOptions.concat(option));
        }
      }
      setIsOpen(false);
    },
    [dropDownOptions, setDropDownOptions, getTotalLength],
  );

  const onDeleteClick = useCallback(
    (e, option) => {
      e.stopPropagation();
      setDropDownOptions(dropDownOptions.filter(i => i !== option));
    },
    [dropDownOptions, setDropDownOptions],
  );

  const onCustomDeleteClick = useCallback(
    (e, option) => {
      e.stopPropagation();
      setCustomOptions(customOptions.filter(i => i !== option));
    },
    [customOptions, setCustomOptions],
  );

  const openUserInput = useCallback(() => {
    setIsUserInputOpen(true);
  }, []);

  const onUserInputKeypress = useCallback(
    e => {
      const option = e.target.value;
      if (getTotalLength() < 5) {
        if (!customOptions.includes(option) && !dropDownOptions.includes(option)) {
          setCustomOptions(customOptions.concat(option));
        }
      }
      setIsOpen(false);
      setIsUserInputOpen(false);
    },
    [customOptions, setCustomOptions, dropDownOptions,getTotalLength],
  );

  return (
    <S.DropDownContainer isOpen={isOpen} {...props}>
      <S.DropDownHeader onClick={toggle}>
        {dropDownOptions.map((v, i) => {
          return (
            <S.HeaderTag onClick={e => onDeleteClick(e, v)} key={i}>
              {v}
            </S.HeaderTag>
          );
        })}{' '}
        {customOptions.map((v, i) => {
          return (
            <S.HeaderTag onClick={e => onCustomDeleteClick(e, v)} key={i}>
              {v}
            </S.HeaderTag>
          );
        })}
        &nbsp;
        <S.HeaderArrow />
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownList>
          {options.map((option, i) => (
            <S.ListItem onClick={onOptionClick(option)} key={i}>
              {option}
            </S.ListItem>
          ))}
          {isUserInputOpen ? (
            <S.UserInput onKeyPress={e => e.key === 'Enter' && onUserInputKeypress(e)} />
          ) : (
            <S.ListItem onClick={openUserInput}>직접입력</S.ListItem>
          )}
        </S.DropDownList>
      )}
    </S.DropDownContainer>
  );
};
export default DropDown;
