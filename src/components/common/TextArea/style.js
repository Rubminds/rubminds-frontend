import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
    width:${(props) => props.width ? props.width : "100%"};
    background-color:#fff;
    font-size: 1.6rem;
    padding:0.6rem;
    border:1px solid rgba(128, 128, 128, 0.199);
    border-radius:10px;
    height:auto;
    min-height:15rem;
    &:focus{
        outline:none;
    }
`