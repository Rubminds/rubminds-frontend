import React, { useCallback } from 'react';
import * as S from '../WrittingInnerForm/style';

const Content = ({ content, setContent }) => {
  const onContentChange = useCallback(
    e => {
      setContent(e.target.value);
    },
    [content]
  );
  return (
    <>
      <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="3%">
        모집 내용
      </S.MainTitle>
      <S.MainTextArea
        name="content"
        placeholder="프로젝트에 대한 자세한 설명을 부탁드립니다."
        onChange={onContentChange}
        required="required"
      ></S.MainTextArea>
    </>
  );
};

export default Content;
