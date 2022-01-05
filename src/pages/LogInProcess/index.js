import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { signinUser } from '../../modules/user';

const LogInProcess = () => {
    // callBack URL 에서 얻을 수 있는 정보
    // :id/:nickname/:accessToken/:signupCheck/:avatar
  
    const { id, nickname, accessToken, signupCheck, avatar } = useParams();
    const dispatch = useDispatch(); 
    const history = useHistory(); 

    const [data] = useState({
        id : parseInt(id), 
        nickname : nickname,  
        avatar : avatar === '0' || undefined ? "DefaultImg" : avatar
    })

    useEffect(() => {
        localStorage.setItem('accessToken', accessToken);
        if (JSON.parse(signupCheck)){
            console.log(data); 
            dispatch(signinUser(data));
            history.push('/'); 
        }
        else{
            history.push('/signup');
        }
    }, []); 

    return (
        <>
            <h1>로그인 프로세스</h1>
        </>
    )
}

export default LogInProcess; 
