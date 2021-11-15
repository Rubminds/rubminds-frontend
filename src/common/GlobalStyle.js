import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    height: 100%;
    font-size:16px; //1rem
    margin:0px;
    padding:0px;
    font-family:"Malgun Gothic";
}
div{
    -webkit-box-sizing:border-box;
}
nav{
    -webkit-box-sizing:border-box;
}
button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}
a{ 
    /* 링크의 색상 및 밑줄 없애기 */
    color: inherit;
    text-decoration: none;
}
li{
    list-style:none;
    cursor:pointer;
}
ul{
    display:flex;
    list-style: none;
    padding:0px;
    margin:0px;
}
input:focus{
    outline:none;
}

`;
export default GlobalStyles;
