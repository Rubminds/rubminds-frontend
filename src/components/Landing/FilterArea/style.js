import styled from 'styled-components';
import { flexColumn, flexCenter, flexBetween } from '../../../constants';

export const FilterWrapper = styled.section`
  ${flexColumn};
  align-items: center;
`;

export const SortWrapper = styled.div`
  width: 100%;
  ${flexBetween}
  margin-top: 5rem;
`;

export const SortOptionWrapper = styled.ul``;

export const SortOption = styled.li`
  font-size: 2rem;
  display: flex;
  white-space: nowrap;
  align-items: center;
  font-weight:${props => props.option === props.selected ? 'bold':'initial'};
  color:${props => props.option === props.selected ? '#80e9c6':'initial'};
  & + & {
    margin-left: 1rem;
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

export const AreaSelect = styled.select`
  width: 20rem;
  border: none;
  font-size: 2rem;
  border-radius: 30px;
  padding: 1rem 1.5rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;
