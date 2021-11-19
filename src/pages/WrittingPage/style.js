import styled from 'styled-components'
import { flexColumn, flexBetween, flexCenter } from '../../constants'

export const WrittingBackGround = styled.div`
  background-color: #f9fbfc;
  padding: 5% 10% 5% 10%;
`

export const WrittingInnerForm = styled.form`
  background-color: white;
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.16);
  padding: 5% 10% 5% 10%;
`

export const CategoryWrapper = styled.div`
  ${flexBetween};
  margin-top: 50px;
`

export const CategoryCard = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
  background-color: ${ props => props.backgroundColor};
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  & + & {
    margin-left: 150px;
  }
  cursor : pointer; 
`

export const MainTitle = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`
export const InputBox = styled.input`
  width: ${props => props.width || '100%'};
  height: 70px;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 0px 30px 0px 30px;
  font-size: 30px;
`

export const MiddleWrapper = styled.div`
  display: flex;
  margin-top: 5%;
`

export const RecruitPeopleWrapper = styled.div`
  flex: 1;
`

export const MeetEnviromentWrapper = styled.div`
  flex: 1.2;
`

export const MeetSelect = styled.select`
  width: 80%;
  padding: 20px;
  border-radius: 30px;
  font-size: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
`

export const EnviromentCheck = styled.input`
  width: 30px;
  height: 30px;
  border: 1px;
`
export const AreaSelect = styled.select`
  width: 50%;
  border: none;
  font-size: 20px;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`
export const MainTextArea = styled.textarea`
  width: 100%;
  height: 540px;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 20px;
`

export const BtnArea = styled.div`
  display: flex;
  margin-top : 5%;
  margin-bottom : 5%;
`

export const BtnLeftArea = styled.div`
  flex: 3;
`

export const BtnRightArea = styled.div`
  flex: 1;
  position : relative; 
`
export const Btn = styled.button`
  padding : 20px; 
  background-color: ${props=> props.backgroundColor || '#CDF6E8'};
  border : none; 
  border-radius: 30px;
  font-size : 30px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  position : absolute;
  right : ${props=> props.right || '0px'};
`;