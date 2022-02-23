import React from 'react'
import * as S from '../../SignUp/SignUpPageRight/style'

const Introduce = ({ introduce, onChangeIntroduce }) => {
  return (
    <>
      <S.SectionTitle aquired>
        자기소개
      </S.SectionTitle>
      <S.Introduce onChange={onChangeIntroduce} value={introduce} />
    </>
  )
}

export default Introduce
