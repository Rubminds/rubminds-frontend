import styled from 'styled-components';
import { flexColumn, flexBetween, flexCenter } from '../../../constants';

export const CardWrapper = styled.li`
  ${flexColumn};
  width: 300px;
  height: 200px;
  border-radius: 30px;
  padding: 2% 2%;
  margin:2%;
  box-shadow:3px 3px 4px rgba(0, 0, 0, 0.2);
  background-color:${(props) => props.status === '진행중' ? "#AA8AE8" : props.status === '진행완료' ? "#7944E3":'#fff'};
  opacity: ${(props) => props.status === '진행중' ? "0.6" : props.status === '진행완료' ? "0.7":'1'};
  position:relative;
  ${flexBetween};
`;

export const CardStatusWrapper = styled.div`
    position:absolute;
    top:-1%;
    left:-1%;
    border-radius: 30px;
    ${flexCenter};
    width:100%;
    height:100%;
    color:#fff;
    z-index:10;
    display:${(props) => props.status === "모집중" ? "none":""};
`

export const CardCategory = styled.div``;

export const CardTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight:bold;
`;

export const CardSkills = styled.div`
    ${flexCenter};
`;

export const CardFooter = styled.div`
  ${flexBetween};
  color:#707070;
`;

export const FooterTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items:end;
  width:70%;
`;

export const FooterTag = styled.li`
  font-size: 12px;
  &+&{
      margin-left:1%;
  }
`;

export const DibBtn = styled.button`
  border: none;
  background-color: inherit;
  display:flex;
  align-items:center;
`;
