import React, { useCallback } from 'react';
import * as S from '../WrittingInnerForm/style';

const Title = ({ title, setTitle }) => {
  const onTitleChange = useCallback(
    e => {
      setTitle(e.target.value);
    },
    [title]
  );

  return (
    <>
      <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        제목
      </S.MainTitle>
      <S.InputBox
        type="text"
        name="title"
        placeholder="제목을 입력하세요."
        onChange={onTitleChange}
        required="required"
      />
    </>
  );
};

export default Title;
