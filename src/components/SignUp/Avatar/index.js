import React, { useCallback, useRef, useState } from 'react';
import * as S from '../SignUpPageRight/style';
import { CgProfile } from 'react-icons/cg';

const Avatar = ({ fileInfo, setFileInfo }) => {

  const imgInput = useRef();
  const [attachMent, setAttachment] = useState();

  const onProfileUpload = useCallback(() => {
    imgInput.current.click();
  }, []);

  const onProfileURL = useCallback(
    e => {
      const reader = new FileReader();
      setFileInfo(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = finished => {
        setAttachment(finished.target.result);
        e.target.value = '';
      };
    },
    [attachMent, fileInfo]
  );

  const onDeleteURL = useCallback(() => {
    setFileInfo(null);
    setAttachment(null);
  }, [fileInfo, attachMent]);

  return (
    <>
      <S.ProfileWrapper>
        {attachMent ? (
          <>
            <img
              src={attachMent}
              width="200rem"
              height="200rem"
              style={{ display: 'block', borderRadius: '5000px', cursor:'pointer' }}
              onClick={onDeleteURL}
              alt=""
            />
          </>
        ) : (
          <CgProfile size="100" onClick={onProfileUpload} cursor="pointer"/>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg"
          onChange={onProfileURL}
          hidden
          ref={imgInput}
        />
      </S.ProfileWrapper>
    </>
  );
};

export default Avatar;
