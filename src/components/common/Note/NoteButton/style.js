import styled from 'styled-components';
import mediaQuery from '../../../../hooks/mediaQuery';
import { flexCenter } from '../../../../constants';

export const StyledNoteButton = styled.button`
  position: fixed;
  width: 75px;
  height: 75px;
  background-color: #aa8ae8;
  border-radius: 100px;
  border: none;
  bottom: 10%;
  right: 4%;
  ${flexCenter}
  cursor:pointer;
  z-index: 9999;
  ${mediaQuery({ width: '60px', height: '60px' })}
`;
