import styled from 'styled-components';
import { flexColumn, flexBetween } from '../../../constants';

export const CardWrapper = styled.li`
  ${flexColumn};
  width: 300px;
  height: 200px;
  border-radius: 30px;
  padding: 2% 2%;
  margin:2%;
  box-shadow:3px 3px 4px rgba(0, 0, 0, 0.1);
  background-color:#fff;
`;

export const CardCategory = styled.div``;

export const CardTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardSkills = styled.div``;

export const CardFooter = styled.div`
  ${flexBetween};
`;

export const FooterTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const FooterTag = styled.li`
  font-size: 12px;
`;

export const DibBtn = styled.button`
  border: none;
  color: yellow;
  background-color: inherit;
`;
