import styled from 'styled-components'
import mediaQuery from '../../../hooks/mediaQuery'

export const StyledChatButton = styled.button`
    position:fixed;
    width:80px;
    height:80px;
    background-color:#AA8AE8;
    border-radius:100px;
    border:none;
    bottom:10%;
    right:4%;
    cursor:pointer;
    z-index:9999;
    ${mediaQuery({width:"60px", height:"60px"})}
`