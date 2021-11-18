import React from 'react';
import * as S from './style'

import { Input,TextArea } from '../..';

const ResultForm = () =>{
    return(
        <S.ResultFormWrapper>
            <TextArea />
            <Input placeholder="ex) github.com/Rubminds"/>
        </S.ResultFormWrapper>
    )
}

export default ResultForm;