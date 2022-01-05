import React, {useState, useEffect } from 'react'
import axios from 'axios';
import * as S from '../SignUpPageRight/style'

const Nickname = ({ nickname, onChangeNickname}) => {

  const [result, setResult] = useState(null); 

    const nicknameCheckHandler = (nickname)=>{
      axios.get(`https://dev.rubminds.site/api/user/check?nickname=${nickname}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        }
      }
      )
      .then((res)=>console.log(res))
      .catch((e)=>console.log(e)); 
    };

    useEffect(()=>{
      console.log(result); 
    },[result]); 

  return (
    <>
      <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem" aquired>
        닉네임
      </S.MainTitle>
      <S.NickNameWrapper>
        <S.NickNameBox name="nickname" onChange={onChangeNickname} required />
        <S.CheckBox type='button' value='중복체크' onClick={nicknameCheckHandler} />
      </S.NickNameWrapper>
    </>
  )
}

export default Nickname
