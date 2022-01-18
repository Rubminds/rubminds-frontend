import React, { useState, useCallback, useEffect, useRef } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import { Carousel } from '../..';
import useInput from '../../../hooks/useInput';
import { submitResultPost } from '../../../modules/post';

const ResultForm = ({ post }) => {
  const [file, setFile] = useState(null);
  const [refLink, onChangeRefLink] = useInput('');
  const [completeContent, onChangeCompleteContent] = useInput('');
  const [images, onChangeImages, setImages] = useInput([]);
  const dispatch = useDispatch();
  const fileInput = useRef();
  const completeContentInput = useRef();
  const refLinkInput = useRef();
  const submitBtn = useRef();

  const onChangeFile = useCallback(e => {
    console.log(e.target.files[0])
    setFile(e.target.files[0]);
  }, []);

  const onSubmitResultClick = useCallback(
    e => {
      e.preventDefault();
      const dataObj = {
        refLink,
        completeContent,
      };
      const formData = new FormData();
      file && formData.append('completeFiles', file);
      console.log(file);
      images.length > 0 && formData.append('images', images);

      formData.append(
        'completeInfo',
        new Blob([JSON.stringify(dataObj)], { type: 'application/json' }),
      );

      dispatch(submitResultPost({ postId: post.id, content: formData }));
    },
    [completeContent, refLink, images, file, dispatch, post.id],
  );

  useEffect(() => {
    const isDone = post.completeContent || post.refLink || (post.completeFile); //추후에 이미지리스트도 추가
    if (isDone) {
      fileInput.current.disabled = true;
      submitBtn.current.disabled = true;
      refLinkInput.current.disabled = true;
      completeContentInput.current.disabled = true;
      refLinkInput.current.style.backgroundColor = '#EAEEF2';
      completeContentInput.current.style.backgroundColor = '#EAEEF2';
      submitBtn.current.style.backgroundColor = '#EAEEF2';
      refLinkInput.current.value = post.refLink;
      completeContentInput.current.value = post.completeContent;
    }
  }, []);

  return (
    <S.ResultFormWrapper>
      <S.FormBigTitle>결과</S.FormBigTitle>
      <S.FileWrapper>
        <S.UploadFile htmlFor="input-file">파일 업로드</S.UploadFile>
        <S.UploadFileName>{ file && file.name}</S.UploadFileName>
      </S.FileWrapper>
      <input
        type="file"
        id="input-file"
        style={{ display: 'none' }}
        onChange={onChangeFile}
        ref={fileInput}
      />
      <S.FormSmallTitle>첨부 이미지</S.FormSmallTitle>
      <Carousel size="30rem" Imgs={images} setImgs={setImages} />
      <S.FormSmallTitle>진행 방법 및 결과 설명</S.FormSmallTitle>
      <S.TextArea  onChange={onChangeCompleteContent} ref={completeContentInput} />
      <S.FormSmallTitle>첨부 링크</S.FormSmallTitle>
      <S.Input
        placeholder="ex) github.com/Rubminds"
        onChange={onChangeRefLink}
        ref={refLinkInput}
      />
      <S.Submit onClick={onSubmitResultClick} ref={submitBtn}>
        결과물 업로드
      </S.Submit>
    </S.ResultFormWrapper>
  );
};

export default ResultForm;
