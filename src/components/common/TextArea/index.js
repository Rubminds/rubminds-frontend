import React from 'react';
import * as S from './style'

const TextArea = ({placeholder, children, ...props}) =>{
    return(
        <S.StyledTextArea type="textarea" placeholder={placeholder} {...props}>{children}</S.StyledTextArea>
    )
}

export default TextArea;