import React, { useCallback } from 'react'
import * as S from '../WrittingInnerForm/style'

const Kinds = ({ kinds, setKinds, setIsScout, btnColor, setBtnColor }) => {
  const onKindsChange = useCallback(
    e => {
      console.log(JSON.stringify(e.target.getAttribute('value'))); 
      setKinds(e.target.getAttribute('value'))
      switch (e.target.getAttribute('value')) {
        case 'STUDY':
          setIsScout(false)
          setBtnColor(['#FBEAFF', 'white', 'white'])
          break
        case 'SCOUT':
          setIsScout(true)
          setBtnColor(['white', '#FBEAFF', 'white'])
          break
        case 'PROJECT':
          setIsScout(false)
          setBtnColor(['white', 'white', '#FBEAFF'])
          break
      }
    },
    [kinds]
  )
  return (
    <>
      <S.MainTitle fontSize="3rem" marginBottom="3%">
        모집 유형
      </S.MainTitle>
      <S.CategoryWrapper>
        <S.CategoryCard
          name="kinds"
          value="STUDY"
          backgroundColor={btnColor[0]}
          onClick={onKindsChange}
        >
          <S.Book fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스터디</S.MainTitle>
        </S.CategoryCard>
        <S.CategoryCard
          name="kinds"
          value="SCOUT"
          backgroundColor={btnColor[1]}
          onClick={onKindsChange}
        >
          <S.PersonAdd fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">스카웃</S.MainTitle>
        </S.CategoryCard>
        <S.CategoryCard
          name="kinds"
          value="PROJECT"
          backgroundColor={btnColor[2]}
          onClick={onKindsChange}
        >
          <S.UserGroup fontSize="3rem" />
          <S.MainTitle fontSize="1.3rem">프로젝트</S.MainTitle>
        </S.CategoryCard>
      </S.CategoryWrapper>
    </>
  )
}

export default Kinds
