import React,{ useState,useCallback} from 'react';
import * as S from './style';

import { Input, TextArea,Carousel } from '../..';

const ResultForm = () => {
  const [fn, setFn] = useState('');
  const onChangeFile = useCallback((e)=>{
    setFn(e.target.value)
  },[])
  return (
    <S.ResultFormWrapper>
      <S.FormBigTitle>결과</S.FormBigTitle>
      <S.FileWrapper><S.UploadFile htmlFor="input-file">파일 업로드</S.UploadFile> <S.UploadFileName>{fn}</S.UploadFileName></S.FileWrapper>
      <input type="file" id="input-file" style={{display:"none"}} onChange={onChangeFile}/>
      <S.FormSmallTitle>첨부 이미지</S.FormSmallTitle>
      <Carousel size="30rem"/>
      <S.FormSmallTitle>진행 방법 및 결과 설명</S.FormSmallTitle>
      <TextArea/>
      <S.FormSmallTitle>첨부 링크</S.FormSmallTitle>
      <Input placeholder="ex) github.com/Rubminds" />
      <S.Submit>결과물 업로드</S.Submit>
    </S.ResultFormWrapper>
  );
};

export default ResultForm;
