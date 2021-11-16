import styled from "styled-components";
import theme from '../../common/theme'
import { flexCenter } from '../../constants'
import { CgProfile } from 'react-icons/cg'


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
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`

export const SignUpPageRight = styled.div`
  position : fixed; 
  top : 0;
  right : 0;
  width: 50%;
  height: 100vh;
  padding : 90px 40px 0px 40px;
  background: white;
`

export const SignUpPageInnerForm = styled.form`
  margin-top: 50px;
`

export const ProfileWrapper = styled.div`
    ${flexCenter}
    margin : auto; 
    color : grey;
    ${CgProfile}{
      cursor : pointer;
    }
`; 

export const NickNameBox = styled.input`
  border : 1px solid #707070;
  width : 404px;
  height : 70px; 
  border-radius : 30px; 
  padding : 0px 30px 0px 30px ;
  font-size : 30px; 
`;

export const DoubleCheckBox = styled.button`
  height : 70px; 
  border-radius : 30px; 
  font-size : 30px; 
  background-color : #CDF6E8;
  border : none;  
  padding : 0px 20px 0px 20px;
  margin-left : 50px;
  font-size : 20px;
`;