import styled from 'styled-components';

import { flexCenter, flexColumn } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';
import { Paper } from '../../';

export const RowContentWrapper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 20rem;
  margin-top: 4rem;
  padding: 3rem 6rem;
  ${mediaQuery({ padding: '2rem 1rem', "flex-direction":"column", height:"auto", "max-height":"initial"})};
`;
export const Content = styled.div`
  padding: 0 4rem;
  height: 100%;
  ${flexColumn};
  justify-content: center;
  flex: ${(props) => props.flex};
  &:last-child {
    padding-right: 0;
    border-left: 1px solid rgba(128, 128, 128, 0.199);
    ${mediaQuery({"border-top":"1px solid rgba(128, 128, 128, 0.199)", "border-left":"none"})}
  }
  ${mediaQuery({padding:"2rem 1rem", width:"100%"})};
`;
export const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  ${mediaQuery({margin:"1rem 0"})}
`;
export const NameIntroduce = styled.div`
  ${flexColumn};
  justify-content: space-between;
  height: 100%;
`;

export const Name = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;
export const Introduce = styled.label`
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; //라인수 정함
  -webkit-box-orient: vertical;
  ${mediaQuery({"margin-top":"1rem"})}
`;
export const SkillsWrapper = styled.ul`
  display: flex;
`;
export const SkillImg = styled.img`
  width: 6rem;
  height: 6rem;
  &+&{
    margin-left:0.5rem;
  }
`;
