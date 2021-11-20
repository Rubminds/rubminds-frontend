import styled from 'styled-components';
import { flexBetween } from '../../../constants';
import theme from '../../../common/theme'

export const HeaderWrapper = styled.nav`
  background:linear-gradient(to right, ${theme.colors.gradientLeft}, ${theme.colors.gradientRight});
  //background-color: inherit;
  width: 100%;
  height: 7.2rem;
  ${flexBetween};
  align-items: center;
  z-index:9999;
  padding:0 10%;
  @media all and (max-width:768px){
    padding:0 5%;
  }
`;

export const HeaderContent = styled.label`
  font-size: 2.6rem;
  color: #ffffff;
  font-weight: bold;
  cursor : pointer; 
`;
