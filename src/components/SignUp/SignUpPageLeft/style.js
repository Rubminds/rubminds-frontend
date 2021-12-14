import styled from 'styled-components'
import theme from '../../../common/theme'
import mediaQuery from '../../../hooks/mediaQuery'

export const SignUpPageLeftWrapper = styled.div`
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
  ${mediaQuery({display : 'none'})}  
`
export const LeftMainTextWrapper = styled.div`
    text-align : center;
    margin-top : -20%;
`;

export const MainTitle = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  font-size: ${props => props.fontSize === 'big'? '4rem' : '2.5rem'};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`;