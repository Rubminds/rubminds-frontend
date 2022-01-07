import React, { useState, useCallback } from 'react'
import axios from 'axios'
import * as S from '../SignUpPageRight/style'

const Nickname = ({ nickname, setNickname, setnicknameCheck }) => {
  const onNicknameChange = e => {
    setNickname(e.target.value)
  }

  const nicknameCheckHandler = useCallback(e => {
    axios
      .get(
        `https://dev.rubminds.site/api/user/nickname/check?nickname=${nickname}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          },
        }
      )
      .then(res => {
        alert('사용 가능한 닉네임 입니다.');
        setnicknameCheck(true);
      })
      .catch(e => { 
        alert('이미 사용 중인 닉네임 입니다.');
        setnicknameCheck(false)
      })
  }, [])

  return (
    <>
      <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem" aquired>
        닉네임
      </S.MainTitle>
      <S.NickNameWrapper>
        <S.NickNameBox
          data-id="1"
          name="nickname"
          onChange={onNicknameChange}
          required
        />
        <S.CheckBox
          data-id="1"
          type="button"
          value="중복체크"
          onClick={nicknameCheckHandler}
        />
      </S.NickNameWrapper>
    </>
  )
}

export default Nickname
