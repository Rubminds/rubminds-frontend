import styled from 'styled-components'
import theme from '../../../common/theme'
import mediaQuery from '../../../hooks/mediaQuery'


export const LogInPageLeft = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width : 50vw;
  height: 100vh;
  display : flex; 
  align-items : center; 
  justify-content : center;
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );
  ${mediaQuery({width : '100%', height : '50vh', padding : '15rem 0 0 0'})}  
`
export const LeftMainTextWrapper = styled.div`
    text-align : center;
    margin-top : -20%;
`;

export const MainTitle = styled.div`
  font-size: ${props => props.fontSize === 'big'? '4rem' : '2.5rem'};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  margin : ${props => props.margin === 'topBottom' ? '5rem 0 0 0' :  '5rem 0 0 0'};
`