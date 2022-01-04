import React, {useEffect} from 'react'
import { Redirect, useParams } from 'react-router-dom';

const LogInProcess = () => {
    // /:id/:nickname/:accessToken/:signupCheck/:avatar
    const {id, nickname, accessToken, signupCheck, avatar} = useParams();
    useEffect(()=>{
        console.log(id, nickname, accessToken, signupCheck, avatar); 
    }, []); 
    return (
        <>
        <h1>여기 로그인 로직 처리</h1> 
        </>
    )
}

export default LogInProcess; 
