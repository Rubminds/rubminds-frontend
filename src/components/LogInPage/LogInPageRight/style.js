import styled from 'styled-components'
import theme from '../../../common/theme'
import { flexCenter, flexBetween, flexColumn } from '../../../constants'
import mediaQuery from '../../../hooks/mediaQuery'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'


export const MainTitle = styled.div`
  font-size: ${props => props.fontSize === 'big'? '5rem' : '3rem'};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  margin : ${props => props.margin === 'topBottom' ? '5rem 0 0 0' :  '5rem 0 0 0'};
`

export const LogInPageRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 5rem 15rem 15rem 15rem;
  width : 50%;
  height: 100vh;
  background-color: white;
  ${mediaQuery({width : '100%', height : '50vh', top : 'auto', bottom: '0', 
  padding : '5rem 5rem 5rem 5rem'})}
`

export const LogInPageInnerRight = styled.div`
  margin-top: 10rem;
  min-width : 400px;
  ${flexCenter}
  justify-content: space-around;
  ${mediaQuery({'margin-top' : '7rem'})}
`

export const LogInBox = styled.div`
  border-radius: 3rem;
  width: 17rem;
  height: 17rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.16);
  text-align: center;
  background-color : ${props => props.bgColor || 'white'};  
  cursor: pointer;
  position : relative;
`

export const Google = styled(FcGoogle)`
  font-size : 7.5rem; 
  position : absolute;
  top : 30%;
  left : 30%;
`;

export const KaKaoTalk = styled(RiKakaoTalkFill)`
  font-size : 7.5rem; 
  background-color: yellow;
  position : absolute;
  top : 30%;
  left : 30%;
`;

export const labelWrap = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  ${mediaQuery({'margin-top' : '0rem'})}
`
