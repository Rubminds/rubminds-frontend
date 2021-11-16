import styled from 'styled-components';
import { flexCenter } from '../../../constants';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdCloseCircle } from 'react-icons/io';

export const DropDownContainer = styled.div`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '60px')};
  position: relative;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  z-index: 10;
  padding: 4px 10px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};
  display: flex;
  align-items: center;
`;
export const DropDownHeader = styled.div`
  width: 100%;
  //font-weight: bold;
  display: flex;
  align-items: center;
  margin: auto;
`;

export const HeaderArrow = styled(FiChevronDown)`
  font-size: 24px;
  position: absolute;
  right: 3%;
  cursor: pointer;
`;
export const HeaderTag = styled.div`
  position: relative;
  width: 120px;
  font-size: 16px;
  line-height: 32px;
  background-color: lightgray;
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
  z-index:10;
`;
export const TagDelete = styled(IoMdCloseCircle)`
  position: absolute;
  top: 0;
  right: 5%;
  font-size: 14px;
  color: red;
`;

export const DropDownList = styled.ul`
  position: absolute;
  width: 100%;
  left: 0;
  top:100%;
  padding: 8px 1px;
  border: none;
  max-height: 200px;
  overflow-y: auto;
  /* 드롭박스 스크롤바 없애기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 0;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const ListItem = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 12px;
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
