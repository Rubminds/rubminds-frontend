import styled from 'styled-components';
import { flexCenter } from '../../../constants';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdCloseCircle } from 'react-icons/io';

export const DropDownContainer = styled.div`
  width: 20rem;
  height: ${props => (props.height ? props.height : '6rem')};
  position: relative;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  border-bottom-left-radius: ${props => props.isOpen && '0'};
  border-bottom-right-radius: ${props => props.isOpen && '0'};
  z-index: 2;
  padding: 0.4rem 2rem;
  margin-top: ${props => (props.marginTop ? props.marginTop : '0')};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const DropDownHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  //margin: auto;
`;

export const HeaderArrow = styled(FiChevronDown)`
  font-size: 2.4rem;
  position: absolute;
  right: 3%;
  cursor: pointer;
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
