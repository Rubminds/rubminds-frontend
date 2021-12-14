import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

import { flexBetween } from '../../../constants';
import { Paper } from '../../';
import mediaQuery from '../../../hooks/mediaQuery';

export const ChatModalWrapper = styled(Paper)`
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 9999;
  background-color: #aa8ae8;
  width: 45rem;
  height: 60rem;
  padding: 2rem 2rem;
  ${mediaQuery({width:'100%', height:'80%', bottom:'5%', right:0,})}
`;

export const ModalHeader = styled.div`
  ${flexBetween};
  padding: 0 1rem;
`;

export const HeaderTitle = styled.label`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;

export const CloseButton = styled(GrClose)`
  font-size: 2rem;
  cursor:pointer;
`;

export const Contents = styled(Paper)`
  width: 100%;
  height: 95%;
  margin-top: 1rem;
`;
