import React from 'react'
import * as S from './style'

const SignUpPageLeft = () => {
    return (
        <>
            <S.SignUpPageLeftWrapper>
                <S.MainTitle color="white" fontSize="50px">
                    당신의 개발 동료를 찾아 줄
                </S.MainTitle>
                <S.MainTitle color="white" fontSize="50px">
                    최고의 온라인 커뮤니티
                </S.MainTitle>
                <S.MainTitle
                style={{ marginTop: '50px' }}
                color="white"
                fontSize="30px"
                >
                    Rubminds에서 당신의 팀원을 찾으세요!
                </S.MainTitle>
            </S.SignUpPageLeftWrapper>
        </>
    )
}

export default SignUpPageLeft
