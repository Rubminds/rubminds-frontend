import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../../constants';

export const CategoryWrapper = styled.section`
  ${flexCenter};
  margin-top: 5rem;
`;

export const CategoryCard = styled.button`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 12rem;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  & + & {
    margin-left: 5rem;
  }
`;
