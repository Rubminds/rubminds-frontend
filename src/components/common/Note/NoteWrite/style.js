import styled from 'styled-components';
import { MdOutlineArrowBackIos } from 'react-icons/md';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BackBtn = styled(MdOutlineArrowBackIos)`
  margin-top: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const UserName = styled.label`
  font-size: 1.6rem;
  font-weight: bold;
`;
