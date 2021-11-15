import styled from 'styled-components';
import { flexBetween } from '../../../constants';
import theme from '../../../common/theme'

export const HeaderWrapper = styled.nav`
  background:linear-gradient(to right, ${theme.colors.gradientLeft}, ${theme.colors.gradientRight});
  //background-color: inherit;
  width: 100%;
  height: 72px;
  ${flexBetween};
  align-items: center;
  z-index:9999;
  padding:0 70px;
`;

export const HeaderContent = styled.label`
  font-size: 26px;
  color: #ffffff;
  font-weight: bold;
`;
