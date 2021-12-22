import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../../constants';

export const FilterWrapper = styled.div`
  ${flexColumn};
  align-items: center;
`;

export const SortWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5rem;
`;

export const SortOption = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  & + & {
    margin-left: 2%;
  }
`;

export const DetailTitle = styled.label`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  width: 100%;
  ${flexCenter};
  margin-top: 5rem;
`;
