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
      <S.SectionTitle>
        제목
      </S.SectionTitle>
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
