import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
}
body {
    height: 100%;
    width:100%;
    margin:0px;
    padding:0px;
    font-family:"Malgun Gothic";
    box-sizing:border-box;
}
html{
    font-size:10px;
    @media all and (max-width:768px){
        font-size:6px !important;
    }
}

input { 
    box-sizing:border-box;
}

textarea{
    box-sizing:border-box;
}
textarea:focus{
    outline:none;
}
input{
    box-sizing:border-box;
}
div{
    box-sizing:border-box;
}
nav{
    box-sizing:border-box;
}
button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    padding:0;
    box-sizing:border-box;
}
a{ 
    /* 링크의 색상 및 밑줄 없애기 */
    color: inherit;
    text-decoration: none;
}
li{
    list-style:none;
    cursor:pointer;
    margin:0;
    box-sizing:border-box;
}
ul{
    display:flex;
    list-style: none;
    padding:0px;
    margin:0px;
    box-sizing:border-box;
}
input:focus{
    outline:none;
}
img{
    box-sizing:border-box;
}
svg{
    box-sizing:border-box;
}

`;
export default GlobalStyles;
