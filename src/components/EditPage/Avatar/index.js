import React, { useCallback, useRef, useState } from 'react'
import * as S from '../../SignUp/SignUpPageRight/style'
import { CgProfile } from 'react-icons/cg'

const Avatar = ({ setAvatarChanged, fileInfo, setFileInfo }) => {

  const imgInput = useRef()
  const [attachMent, setAttachment] = useState(null) 

  const onProfileUpload = useCallback(() => {
    imgInput.current.click()
  }, [])

  const onProfileURL = useCallback(
    e => {
      const reader = new FileReader()
      setFileInfo(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = finished => {
        setAttachment(finished.target.result)
        e.target.value = ''
      }
      setAvatarChanged(true); 
    },
    [attachMent, fileInfo]
  )

  const onDeleteURL = useCallback(() => {
    setAvatarChanged(true); 
    setFileInfo(null)
    setAttachment(null)
  }, [fileInfo, attachMent])

  return (
    <>
      <S.ProfileWrapper>
        {attachMent ? (
          <>
            <img
              src={attachMent}
              width="150px"
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
          accept="image/*"
          onChange={onProfileURL}
          hidden
          ref={imgInput}
        />
      </S.ProfileWrapper>
    </>
  )
}

export default Avatar
