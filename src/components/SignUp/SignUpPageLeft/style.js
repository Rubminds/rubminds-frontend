import styled from 'styled-components'
import theme from '../../../common/theme'
import mediaQuery from '../../../hooks/mediaQuery'

export const SignUpPageLeftWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 50%;
  height: 100vh;
  text-align: center;
  padding: 350px 150px 270px 150px;
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );

  ${mediaQuery({
    display: 'none',
  })}
`
export const MainTitle = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`;