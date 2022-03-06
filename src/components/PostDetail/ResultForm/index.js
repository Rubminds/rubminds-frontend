import React, { useState, useCallback, useEffect, useRef } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { GrDocumentDownload } from 'react-icons/gr';

import { UploadCarousel, ResultCarousel } from '../..';
import useInput from '../../../hooks/useInput';
import { submitResultPost } from '../../../modules/post';

const ResultForm = ({ post, meId, adminId }) => {
  const [file, setFile] = useState(null);
  const [refLink, onChangeRefLink] = useInput('');
  const [completeContent, onChangeCompleteContent] = useInput('');
  const [images, setImages] = useState([]);
  const [completeImages, setCompleteImages] = useState([]);
  const isAdmin = meId === adminId;
  const dispatch = useDispatch();

  const fileInput = useRef();
  const completeContentInput = useRef();
  const refLinkInput = useRef();
  const submitBtn = useRef();

  const onChangeFile = useCallback(e => {
    setFile(e.target.files[0]);
  }, []);

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      const dataObj = {
        refLink,
        completeContent,
      };

      const formData = new FormData();
      Object.values(images).forEach(f => formData.append('files', f));
      file && formData.append('files', file);

      formData.append(
        'completeInfo',
        new Blob([JSON.stringify(dataObj)], { type: 'application/json' }),
      );

      const submitConfirm = window.confirm(
        '결과물 업로드시 수정이 불가합니다.\n결과물을 업로드 하시겠습니까?',
      );
      if (submitConfirm) {
        dispatch(submitResultPost({ postId: post.id, content: formData }));
        alert('결과물이 업로드 되었습니다.');
        window.location.replace(`/post/${post.id}`);
      }
    },
    [completeContent, refLink, images, file, dispatch, post.id],
  );

  useEffect(() => {
    const isDone =
      post.completeContent || post.refLink || post.completeFile || !isAdmin || post.completeImages.length > 0 ;
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
      post.completeImages && setCompleteImages(post.completeImages.map(img => img.url));
    }
  }, [post.completeContent, post.completeFile, post.completeImages, post.refLink, isAdmin]);

  return (
    <S.ResultFormWrapper onSubmit={onSubmitHandler}>
      <S.FormBigTitle>결과</S.FormBigTitle>
      <S.FormSmallTitle>첨부파일</S.FormSmallTitle>
      <S.FileWrapper>
        {post.completeContent ? (
          <S.CompleteFile download href={post.completeFile.url}>
            {post.completeFile && (
              <>
                <GrDocumentDownload fontSize="1.8rem" />
                &nbsp;{post.completeFile.fileName}
              </>
            )}
          </S.CompleteFile>
        ) : (
          <>
            <S.UploadFile htmlFor="input-file">파일 업로드</S.UploadFile>
            <S.UploadFileName>{file && file.name}</S.UploadFileName>
          </>
        )}
      </S.FileWrapper>
      <input
        type="file"
        id="input-file"
        style={{ display: 'none' }}
        onChange={onChangeFile}
        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
        multiple={false}
        ref={fileInput}
      />
      <S.FormSmallTitle>첨부 이미지</S.FormSmallTitle>
      {post.completeContent || !isAdmin ? (
        <ResultCarousel size="30rem" completeImages={completeImages} />
      ) : (
        <UploadCarousel size="30rem" setImages={setImages} />
      )}
      <S.FormSmallTitle>진행 방법 및 결과 설명</S.FormSmallTitle>
      <S.TextArea onChange={onChangeCompleteContent} ref={completeContentInput} required />
      <S.FormSmallTitle>첨부 링크</S.FormSmallTitle>
      <S.Input
        placeholder="ex) github.com/Rubminds"
        onChange={onChangeRefLink}
        ref={refLinkInput}
      />
      <S.Submit type="submit" ref={submitBtn}>
        결과물 업로드
      </S.Submit>
    </S.ResultFormWrapper>
  );
};

export default ResultForm;
