import styled from 'styled-components';
import { AiFillStar,AiFillCrown } from 'react-icons/ai';
import { flexColumn, flexCenter } from '../../../constants/';
import { Avatar, Input } from '../..';

export const TeamEvaluationWrapper = styled.div`
  width: 100%;
  ${flexColumn}
  flex-direction:column;
  background-color: #f9fbfc;
`;

export const TitleWrapper = styled.div`
  width: 70%;
  height: 10rem;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #fff;
  margin-top: 2.8rem;
  ${flexCenter}
  justify-content:space-around;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export const SubTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: initial;
`;

export const ContentsWrapper = styled.form`
  width: 100%;
  ${flexCenter}
  flex-direction:column;
`;

export const UserWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  border-radius: 20px;
`;

export const UserAvatar = styled(Avatar)`
  width: 4rem;
  height: 4rem;
`;

export const UserLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
`;

export const UserRightWrapper = styled.div`
  width: 50%;
  ${flexColumn}
  justify-content:space-around;
  height: 100%;
`;

export const EvaluationContent = styled.div`
  display: flex;
  align-items: center;
`;

export const EvaluationTitle = styled.label`
  font-weight: bold;
  font-size: 1.6rem;
  white-space: nowrap;
`;

export const EvaluationLevel = styled(Input)`
  width: 4rem;
  margin-left: 1rem;
  height: 3rem;
  -moz-appearance: textfield;
`;

export const EvaluationStars = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Star = styled(AiFillStar)`
  color: #ffd975;
  font-size: 3rem;
`;

export const SubmitBtn = styled.button`
  border: none;
  width: 18rem;
  height: 6rem;
  font-size: 1.5rem;
  ${flexCenter};
  background-color: #cdf6e8;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  margin-top: 5rem;
`;
export const WriterMark = styled(AiFillCrown)`
color:red;
`