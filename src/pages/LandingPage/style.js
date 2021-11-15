import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../constants';

export const LandingWrapper = styled.div`
  ${flexColumn};
  position: relative;
`;

export const LandingDetailWrapper = styled.div`
  width: 100%;
  padding: 0 140px;
  ${flexColumn};
`;

export const TitleWrapper = styled.div`
  width: 100%;
  ${flexCenter};
  position: relative;
`;

export const DetailTitle = styled.label`
  font-size: 30px;
  display: flex;
  position: relative;
  width: 100%;
  ${flexCenter};
  margin-top: 70px;
`;
export const DetailShowAll = styled.div`
  position: absolute;
  right: 30%;
`;

export const StyledCheckbox = styled.div`
  background-color: #80e9c6;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  ${flexCenter};
  color: #ffffff;
  cursor: pointer;
`;

export const CheckboxText = styled.label`
  position: absolute;
  right: 27%;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const CategoryWrapper = styled.div`
  ${flexCenter};
  margin-top: 50px;
`;

export const CategoryCard = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
  border: 1px solid black;
  border-radius: 10px;
  & + & {
    margin-left: 150px;
  }
`;

export const FilterWrapper = styled.div`
  ${flexColumn};
  align-items:center;
`;

export const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  margin-top: 50px;
`;
