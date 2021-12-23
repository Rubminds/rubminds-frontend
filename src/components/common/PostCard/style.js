import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { flexColumn, flexBetween, flexCenter } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery'
import theme from '../../../common/theme';

export const CardLinkWrapper = styled(Link)``
export const CardWrapper = styled.div`
  ${flexColumn};
  justify-content:space-between;
  width: 34rem;
  height: 24rem;
  border-radius: 30px;
  padding: 2rem 2rem;
  margin:2rem;
  box-shadow:3px 3px 20px rgba(0, 0, 0, 0.2);
  background-color:${(props) => props.status === 'WORKING' ? `${theme.colors.status2Color}` : props.status === 'FINISHED' ? `${theme.colors.status3Color}`:'#fff'};
  opacity: ${(props) => props.status === 'RECRUIT' ? "1" : '0.75'};
  position:relative;
  ${mediaQuery({width:"280px", "min-height":"220px",padding:"2rem 2rem", "margin":"2rem 0"})};
`;

export const CardStatusWrapper = styled.div`
    position:absolute;
    /* top:-1%;
    left:-1%; */
    top:0;
    left:0;
    border-radius: 30px;
    ${flexCenter};
    width:100%;
    height:100%;
    color:#fff;
    z-index:10;
    display:${(props) => props.status === "RECRUIT" && "none"};
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
  color:${(props) => props.status === "FINISHED" ? "#000" : "#707070"};
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
