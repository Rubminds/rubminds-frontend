import React from 'react'
import * as S from '../SignUpPageRight/style'

const Introduce = ({onChangeIntroduce}) => {
    return (
        <>
        <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem" aquired>
          자기소개
        </S.MainTitle>
        <S.Introduce onChange={onChangeIntroduce} />
        </>
    )
}

export default Introduce
