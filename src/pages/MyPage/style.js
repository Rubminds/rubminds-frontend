import styled from 'styled-components';
import { flexBetween, flexColumn } from '../../constants';
import mediaQuery from '../../hooks/mediaQuery';

export const MyPageWrapper = styled.div`
  width: 100%;
  padding: 4rem 16rem 20rem 16rem;
  background-color: #f9fbfc;
  ${flexColumn};
  ${mediaQuery({ padding: '2rem 4rem 24rem 4rem' })}
`;

export const Division = styled.div`
  ${flexBetween}
  margin-top:5rem;
  ${mediaQuery({"flex-direction":"column"})}
`;

export const EditProfile = styled.label`
  display:flex;
  justify-content:flex-end;
  font-size: 1.2rem;
  color: rgba(128, 128, 128);
  text-decoration: underline;
  text-underline-position: under;
`