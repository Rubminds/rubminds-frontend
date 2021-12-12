import styled from 'styled-components'

export const Paper = styled.div`
    background-color:#fff;
    width:${props => props.width ? props.width : "auto"};
    height:${props => props.height ? props.height: "auto"};
    border-radius:30px;
    border:none;
    box-shadow:3px 3px 20px rgba(0, 0, 0, 0.2);
`