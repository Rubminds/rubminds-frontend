import styled,{css} from 'styled-components';
import { flexColumn, flexBetween, flexCenter,mediaQuery } from '../../../constants';

export const CardWrapper = styled.li`
  ${flexColumn};
  justify-content:space-between;
  width: 30rem;
  height: 20rem;
  border-radius: 30px;
  padding: 2% 2%;
  margin:2%;
  box-shadow:3px 3px 4px rgba(0, 0, 0, 0.2);
  background-color:${(props) => props.status === '진행중' ? "#AA8AE8" : props.status === '진행완료' ? "#7944E3":'#fff'};
  opacity: ${(props) => props.status === '진행중' ? "0.6" : props.status === '진행완료' ? "0.7":'1'};
  position:relative;
  @media all and (max-width:768px){
    min-width:290px;
    min-height:200px;
    padding:2rem 2rem;
  }
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
    font-size:2rem;
`

export const CardCategory = styled.div``;

export const CardTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight:bold;
  font-size:1.4rem;
  ${mediaQuery({"font-size":"2.2rem"})}
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
  font-size: 1.2rem;
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
