import styled from 'styled-components'
import theme from '../../../common/theme'
import mediaQuery from '../../../hooks/mediaQuery'
import { flexCenter, flexBetween, flexColumn } from '../../../constants'


export const LogInPageLeft = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width : 50vw;
  height: 100vh;
  text-align: center; 
  padding: 25rem 0 0 0;
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );
  ${mediaQuery({width : '100%', height : '50vh', padding : '15rem 0 0 0'})}  
`
export const LeftMainTextWrapper = styled.div`
  width : 100%; 
  margin : auto; 
`;

export const MainTitle = styled.div`
  font-size: ${props => props.fontSize === 'big'? '5rem' : '3rem'};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  margin : ${props => props.margin === 'topBottom' ? '5rem 0 0 0' :  '5rem 0 0 0'};
`