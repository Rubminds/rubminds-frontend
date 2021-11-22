import React from 'react';
import * as S from './style'

const Input = ({placeholder , ...props}) =>{
    return(
        <S.StyledInput type="text" placeholder={placeholder} spellCheck={false} {...props}/>
    )
}

export default Input;