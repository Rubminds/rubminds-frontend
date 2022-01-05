import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import { flexColumn, flexCenter, flexBetween } from '../../../constants';
import { CustomDropDown } from '../..';
import mediaQuery from '../../../hooks/mediaQuery';

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
  font-weight: ${props => (props.option === props.selected ? 'bold' : 'initial')};
  color: ${props => (props.option === props.selected ? '#AA8AE8' : 'initial')};
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

export const DropdownWrapper = styled.div`
  ${flexCenter}
  width:100%;
  position: relative;
  margin-top: 5rem;
`;

export const SearchBtnWrapper = styled.div`
  width: 10%;
  margin-left: 1rem;
`;

export const SearchBtn = styled(AiOutlineSearch)`
  background-color: #aa8ae8;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor:pointer;
`;

export const MyCustomDropDown = styled(CustomDropDown)`
  margin-top: 0;
`;
