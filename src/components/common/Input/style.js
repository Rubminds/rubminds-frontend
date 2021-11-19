import styled from 'styled-components';

export const StyledInput = styled.input`
    width:${(props) => props.width ? props.width : "100%"};
    background-color:#fff;
    font-size: 1.6rem;
    padding:1rem;
    border:1px solid rgba(128, 128, 128, 0.199);
    border-radius:10px;
    box-sizing:border-box;
`