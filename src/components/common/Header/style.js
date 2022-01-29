import styled from 'styled-components';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { flexBetween } from '../../../constants';
import theme from '../../../common/theme';
import { Avatar } from '../../';


export const HeaderWrapper = styled.nav`
  background: linear-gradient(
    to right,
    ${theme.colors.gradientLeft},
    ${theme.colors.gradientRight}
  );
  //background-color: inherit;
  width: 100%;
  height: 7.2rem;
  ${flexBetween};
  align-items: center;
  z-index: 9999;
  padding: 0 10%;
  @media all and (max-width: 768px) {
    padding: 0 5%;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 2.6rem;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderContent = styled.label`
  font-size: 2.6rem;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  max-width: 30%;
  font-size: 2.6rem;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

export const LinkWrapper = styled(Link)`
  height:2.6rem;
`

export const UserAvatar = styled(Avatar)`
  width: 2.6rem;
  height: 2.6rem;
`;
export const UserText = styled.label`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size:2.4rem;
  padding: 0 1rem;
  flex: 7;
  cursor: pointer;
`;

export const DownArrow = styled(BsCaretDownFill)`
  font-size: 2rem;
`;

export const UpArrowWrapper = styled.div`
  position: relative;
`;
export const UpArrow = styled(BsCaretUpFill)`
  font-size: 2rem;
`;
