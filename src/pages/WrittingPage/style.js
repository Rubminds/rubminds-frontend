import styled from 'styled-components';
import { flexCenter, flexColumn, flexBetween } from '../../constants';

export const WrittingBackGround = styled.div`
    background-color : #F9FBFC;
    padding : 5% 10% 5% 10%; 
`;

export const WrittingInnerForm = styled.div`
    background-color : white;
    border-radius: 30px;
    box-shadow : 5px 5px 5px rgba(0,0,0,0.16);
    padding : 5% 10% 5% 10%; 
`;

export const CategoryWrapper = styled.div`
  ${flexBetween};
  margin-top: 50px;
`;

export const CategoryCard = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
  background-color:#fff;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2);
  & + & {
    margin-left: 150px;
  }
`;

export const MainTitle = styled.div`
  margin-top : ${props => props.marginTop || '0px'}; 
  margin-bottom : ${props => props.marginBottom || '0px'}; 
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`
export const InputBox = styled.input`
  width : ${props=> props.width || '100%'};   
  height : 70px;
  border : none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius : 30px; 
  padding : 0px 30px 0px 30px ;
  font-size : 30px; 
`;

export const MiddleWrapper = styled.div`
  display : flex;
  margin-top: 5%; 
`;

export const RecruitPeopleWrapper = styled.div`
 flex : 1; 
 background-color: blue;
`;

export const MeetEnviroment = styled.div`
 flex : 1.2; 
 background-color: red;
`;

export const EnviromentCheck = styled.input`
  width : 30px; 
  height : 30px; 
  border : 1px; 
`;

