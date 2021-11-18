import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../../constants';

export const ResultFormWrapper = styled.div`
  background-color: #f9fbfc;
  ${flexColumn};
  width: 100%;
`;

export const FormBigTitle = styled.label`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export const FormSmallTitle = styled.label`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export const Submit = styled.button`
  border: none;
  width: 18rem;
  height: 6rem;
  font-size: 1.5rem;
  ${flexCenter};
  background-color:#CDF6E8;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  margin-top:5rem;
`;
