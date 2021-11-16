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
      let already = false;
      if(selectedOptions.length <5){
        selectedOptions.map(element => {
          element === option? already=true:already=false;
        });
        if(!already){
          setSelectedOptions(selectedOptions.concat(option));
        }
      }
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

  const onUserInputClick = useCallback(()=>{

  })

  return (
    <S.DropDownContainer {...props}>
      <S.DropDownHeader>
        {selectedOptions.map((v) => {
          return (
            <S.HeaderTag onClick={onDeleteClick(v)} key={v.id}>
              {v}
            </S.HeaderTag>
          );
        })}{' '}
        &nbsp;
        <S.HeaderArrow  onClick={toggle}/>
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownList>
          {options.map((option, i) => (
            <S.ListItem onClick={onOptionClick(option)}>{option}</S.ListItem>
          ))}
          <S.ListItem onClick={onUserInputClick}>직접입력</S.ListItem>
        </S.DropDownList>
      )}
    </S.DropDownContainer>
  );
};
export default DropDown;
