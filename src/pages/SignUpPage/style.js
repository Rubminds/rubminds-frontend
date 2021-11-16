import styled from "styled-components";
import theme from '../../common/theme'
import { flexCenter,flexBetween } from '../../constants'


export const SignUpPageWrapper = styled.div`
  display: flex;
`

export const SignUpPageLeft = styled.div`
  position : fixed; 
  top : 0; 
  width: 50%;
  height : 100vh;
  text-align : center;
  padding: 350px 150px 270px 150px;
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );
`
export const MainTitle = styled.div`
  margin-top : ${props => props.marginTop || '0px'}; 
  margin-bottom : ${props => props.marginBottom || '0px'}; 
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`

export const SignUpPageRight = styled.div`
  position : absolute; 
  top : 0;
  right : 0;
  width: 50%;
  height: 100vh;
  padding : 7.5% 7.5% 0px 7.5%;
  background: white;
`

export const SignUpPageInnerForm = styled.form`
  position : relative;
  margin-top: 50px;
`

export const ProfileWrapper = styled.div`
    ${flexCenter}
    margin : auto; 
    color : grey;
`; 

export const NickNameBox = styled.input`
  border : none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  width : 404px;
  height : 70px; 
  border-radius : 30px; 
  padding : 0px 30px 0px 30px ;
  font-size : 30px; 
`;

export const CheckBox = styled.button`
  height : 70px; 
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius : 30px; 
  font-size : 30px; 
  background-color : #CDF6E8;
  border : none;  
  padding : 0px 20px 0px 20px;
  margin-left : 50px;
  font-size : 20px;
`;

export const JobWrapper = styled.div`
  ${flexBetween}
`;

export const JobCheckBtn = styled.button`
  width : 30%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  border : none; 
  background-color: white;
  padding : 20px;
  font-size: 20px;
`; 

export const Introduce = styled.textarea`
  width : 100%;
  border : none; 
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  min-height : 500px; 
  font-size : 20px; 
  border-radius : 30px;
  padding : 20px; 
  margin-bottom : 130px
`;

export const SubmitBtn = styled(CheckBox)`
  position : absolute; 
  bottom : 0; 
  right : 0; 
  padding : 0px 50px 0px 50px; 
`