import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../../constants/';
import { Avatar } from '../..';

export const TeamEvaluationWrapper = styled.div`
  width: 100%;
  ${flexColumn}
`;

export const TitleWrapper = styled.div`
  width: 70%;
  height: 10rem;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  color: #fff;
  background-color: #ff88b3;
  margin-top: 2.8rem;
  ${flexCenter}
  justify-content:space-around;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export const SubTitle = styled.h3`
  font-size: 1.6rem;
  font-weight:initial;
`;

export const UserWrapper = styled.div``

export const UserAvatar = styled(Avatar)`
width:6rem;
height:6rem;
`

export const UserNickname = styled.label`
`