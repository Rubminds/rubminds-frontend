import styled from 'styled-components';
import { flexCenter,flexColumn } from '../../constants';
import mediaQuery from '../../hooks/mediaQuery'

export const MyPageWrapper = styled.div`
  width: 100%;
  padding: 4rem 16rem 12rem 16rem;
  background-color: #f9fbfc;
  ${flexColumn};
  ${mediaQuery({ padding: '2rem 4rem 12rem 4rem' })}
`;
