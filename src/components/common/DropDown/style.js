import styled from 'styled-components';
import { flexCenter } from '../../../constants';

export const DropDownContainer = styled.div`
  width: ${(props) => (props.width ? props.width : '120px')};
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  z-index: 10;
  padding: 4px 10px;
`;
export const DropDownHeader = styled.div`
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const DropDownList = styled.ul`
  position: absolute;
  width: 100%;
  left: 0;
  padding: 8px 0px;
  border: none;
  max-height: 160px;
  overflow-y: auto;
  /* 드롭박스 스크롤바 없애기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

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
