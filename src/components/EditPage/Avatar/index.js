import React, { useCallback, useRef, useState } from 'react';
import * as S from '../../SignUp/SignUpPageRight/style';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';

const Avatar = ({ setAvatarChanged, fileInfo, setFileInfo }) => {
  const imgInput = useRef();
  const { me } = useSelector(state => state.user);
  const [attachMent, setAttachment] = useState(
    me.avatar === 'DefaultImg' ? null : me.avatar
  );

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
      setAvatarChanged(true);
    },
    [attachMent, fileInfo]
  );

  const onDeleteURL = useCallback(() => {
    setAvatarChanged(true);
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
              style={{ display: 'block', borderRadius: '5000px' }}
              onClick={onDeleteURL}
              alt=""
            />
          </>
        ) : (
          <CgProfile size="100" onClick={onProfileUpload} />
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
