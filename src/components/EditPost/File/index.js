import React, { useEffect, useCallback } from 'react';
import * as S from '../../../pages/EditPostPage/style';

const File = ({ file, setFile }) => {
  const onDeleteFile = () => {
    setFile(null);
  };

  useEffect(()=>{
    console.log(file); 
  },[]); 

  const onFileChange = useCallback(
    e => {
      setFile(e.target.files[0]);
    },
    [setFile]
  );

  return (
    <S.FileWrapper>
      <S.FileLeft>
        <S.MainTitle fontSize="3rem" marginTop="5%" marginBottom="6%">
          참고 자료
        </S.MainTitle>

        <S.FileInput htmlFor="input-file">업로드</S.FileInput>
        <input
          name="file"
          type="file"
          id="input-file"
          style={{ display: 'none' }}
          onChange={onFileChange}
        />
        <label onClick={onDeleteFile}>{file && file.name}</label>
      </S.FileLeft>
    </S.FileWrapper>
  );
};

export default File;
