import React, { useCallback } from 'react'
import axios from 'axios'
import * as S from '../../SignUp/SignUpPageRight/style'
import { useSelector } from 'react-redux'

const Nickname = ({ nickname, setNickname, nicknameCheck,  setnicknameCheck }) => {

  const { me } = useSelector(state=>state.user); 
  
  const onNicknameChange = useCallback((e)=>{
    setNickname(e.target.value)
  }, [nickname]);
  
  const onEditNickname = useCallback(()=>{
    setnicknameCheck(false); 
  },[nicknameCheck]); 

  const nicknameCheckHandler = useCallback(async() => {
    if(me.nickname === nickname){
      alert('기존의 닉네임입니다. 사용 가능합니다.'); 
      setnicknameCheck(true);  
      return;   
    }
    
    try{
      await axios.get(
        `/user/nickname/check?nickname=${nickname}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          },
        }
        )
          alert('사용 가능한 닉네임 입니다.');
          setnicknameCheck(true);
        
        
    }catch(e){
      alert('이미 사용 중인 닉네임 입니다.');
      setnicknameCheck(false);
    }
  }, [nickname])



  return (
    <>
      <S.MainTitle marginTop="7.5%" marginBottom="7.5%" fontSize="2rem" aquired>
        닉네임
      </S.MainTitle>
      <S.NickNameWrapper>
        {
          nicknameCheck === false
          ?(
            <>
              <S.NickNameBox
                name="nickname"
                onChange={onNicknameChange}
                value={nickname || ''}
                required
              />
              <S.CheckBox
              type="button"
              value="중복체크"
              onClick={nicknameCheckHandler}
            />
          </>
          )
          : (
            <>
                <S.NickNameChecked onClick={onEditNickname}>{nickname}</S.NickNameChecked>
                <S.CheckBox
                type="button"
                value="중복체크"
                onClick={nicknameCheckHandler}
                disabled
                />
            </>
              )
        }
      </S.NickNameWrapper>
    </>
  )
}

export default Nickname
