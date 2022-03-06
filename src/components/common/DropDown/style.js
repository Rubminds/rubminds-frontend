import styled from 'styled-components';
import { flexCenter } from '../../../constants';
import { FiChevronDown } from 'react-icons/fi';

export const DropDownContainer = styled.div`
  width: ${props => (props.width ? props.width : '90%')};
  height: ${props => (props.height ? props.height : '6rem')};
  position: relative;
  background: #ffffff;
  border: none;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  border-bottom-left-radius: ${props => props.isOpen && '0'};
  border-bottom-right-radius: ${props => props.isOpen && '0'};
  z-index: 10;
  padding: 0.4rem 1rem;
  margin-top: ${props => (props.marginTop ? props.marginTop : '0')};
  display: flex;
  align-items: center;
`;
export const DropDownHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  //margin: auto;
`;

export const HeaderArrow = styled(FiChevronDown)`
  font-size: 2.4rem;
  position: absolute;
  right: 3%;
  cursor: pointer;
`;
export const HeaderTag = styled.div`
  position: relative;
  width: 9rem;
  font-size: 1.6rem;
  line-height: 3rem;
  background-color: lightgray;
  z-index: 10;
  //color: #ffffff;
  cursor: pointer;
  ${flexCenter};
  border-radius: 20px;
  & + & {
    margin-left: 1%;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DropDownList = styled.ul`
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  padding: 0.8rem 0.1rem;
  border: none;
  max-height: 200px;
  overflow-y: auto;
  /* 드롭박스 스크롤바 없애기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: #ffffff;
  box-shadow: 5px 8px 10px rgb(0 0 0 / 10%);
`;

export const ListItem = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin-bottom: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
  ${flexCenter};
  color: #000000;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
