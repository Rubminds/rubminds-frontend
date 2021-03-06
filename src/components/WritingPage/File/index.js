import React, { useCallback } from 'react';
import * as S from '../WrittingInnerForm/style';

const File = ({ file, setFile }) => {
  const onDeleteFile = () => {
    setFile(null);
  };

  const onFileChange = useCallback(
    e => {
      setFile(e.target.files[0]);
    },
    [setFile],
  );

  return (
    <S.FileWrapper>
      <S.FileLeft>
        <S.SectionTitle>
          참고 자료
        </S.SectionTitle>

        <S.FileWrapper>
          <S.FileInput htmlFor="input-file">업로드</S.FileInput>
          <input
            name="file"
            type="file"
            id="input-file"
            style={{ display: 'none' }}
            onChange={onFileChange}
          />
          <S.FileName onClick={onDeleteFile}>&nbsp;{file && file.name}</S.FileName>
        </S.FileWrapper>
      </S.FileLeft>
    </S.FileWrapper>
  );
};

export default File;
