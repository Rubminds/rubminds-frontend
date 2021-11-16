import React, { useEffect, useState, useRef, useCallback } from 'react'
import * as S from './style'
import { useParams } from 'react-router'
import { CgProfile } from 'react-icons/cg'

const SignUp = () => {
  const imgInput = useRef()
  const { accessToken, signupCheck } = useParams()
  const [attachMent, setAttachment] = useState(null)
  const [fileInfo, setFileInfo] = useState(null)
  const [body, setBody] = useState({
    profileSrc: null,
    nickName: null,
    job: null,
    skillSet: null,
    introduce: null,
  })

  const onProfileUpload = useCallback(() => {
    imgInput.current.click()
  }, [])

  const onProfileURL = e => {
    const reader = new FileReader()
    // FormData에 전달해줄 File의 Infomation
    setFileInfo(e.target.files[0])

    reader.readAsDataURL(e.target.files[0]) // e.target.files는 파일을 여러개 선택을 대비하기 위한 API 사용 방법이므로 나는 하나만 할거니까 [0] 으로 선택
    reader.onloadend = finished => {
      // reader는 생명주기함수처럼 다룬다. 파일 로드가 끝나면 Attachment state에 img 의 주소를 담으라는 뜻
      setAttachment(finished.target.result) // 이건 attachment에 URL을 담으라는 뜻, 만약 Img 미리보기를 취소하려면 attachment를 비워주면 된다.
    }
  }

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken)
    return () => {
      localStorage.setItem('signupCheck', signupCheck)
    }
  }, [])

  useEffect(()=> {
    console.log(attachMent); 
  },[attachMent]);

  return (
    <>
      {/* <S.WhiteSpace> </S.WhiteSpace> */}
      <S.SignUpPageWrapper>
        <S.SignUpPageLeft>
          <S.MainTitle color="white" fontSize="50px">
            당신의 개발 동료를 찾아 줄 최고의 온라인 커뮤니티
          </S.MainTitle>
          <S.MainTitle
            style={{ marginTop: '50px' }}
            color="white"
            fontSize="30px"
          >
            Rubminds에서 당신의 팀원을 찾으세요!
          </S.MainTitle>
        </S.SignUpPageLeft>
        <S.SignUpPageRight>
          <S.MainTitle fontSize="50px" fontWeight="bold">
            Sign Up
          </S.MainTitle>

          <S.SignUpPageInnerForm>
            <S.ProfileWrapper>
              {attachMent ? (
                <img src={attachMent} width='30%'/>
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
            <S.MainTitle marginTop="40px" fontSize="20px">
              닉네임
            </S.MainTitle>
            <S.NickNameBox onChange={{}} />
            <S.DoubleCheckBox onClick={{}}>중복 체크</S.DoubleCheckBox>
          </S.SignUpPageInnerForm>
        </S.SignUpPageRight>
      </S.SignUpPageWrapper>
    </>
  )
}

export default SignUp
