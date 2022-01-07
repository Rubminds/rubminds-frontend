import React,{ useState,useCallback} from 'react';
import * as S from './style';

import { Input, TextArea,Carousel } from '../..';
import useInput from '../../../hooks/useInput';

const ResultForm = () => {
  const [fn, onChangeFile] = useInput('')
  const [refLink, onChangeRefLink] = useInput('');
  const [completeContent, onChangeCompleteContent] = useInput('')
  const [images, onChangeImages, setImages] = useInput([]);
  
  const onSubmitResultClick = useCallback(e => {
    e.preventDefault();
    console.log(refLink, completeContent, images, fn)
  },[completeContent, refLink, images])
  return (
    <S.ResultFormWrapper>
      <S.FormBigTitle>결과</S.FormBigTitle>
      <S.FileWrapper><S.UploadFile htmlFor="input-file">파일 업로드</S.UploadFile> <S.UploadFileName>{fn}</S.UploadFileName></S.FileWrapper>
      <input type="file" id="input-file" style={{display:"none"}} onChange={onChangeFile}/>
      <S.FormSmallTitle>첨부 이미지</S.FormSmallTitle>
      <Carousel size="30rem" Imgs={images} setImgs={setImages}/>
      <S.FormSmallTitle>진행 방법 및 결과 설명</S.FormSmallTitle>
      <TextArea onChange={onChangeCompleteContent}/>
      <S.FormSmallTitle>첨부 링크</S.FormSmallTitle>
      <Input placeholder="ex) github.com/Rubminds" onChange={onChangeRefLink}/>
      <S.Submit onClick={onSubmitResultClick}>결과물 업로드</S.Submit>
    </S.ResultFormWrapper>
  );
};

export default ResultForm;
