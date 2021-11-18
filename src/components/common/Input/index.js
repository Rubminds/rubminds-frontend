import React from 'react';
import * as S from './style'

const Input = ({placeholder , ...props}) =>{
    return(
        <S.StyledInput type="text" placeholder={placeholder} {...props}/>
    )
}

export default Input;