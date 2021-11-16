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
  background-color:#F9FBFC;
  min-height:1000px;
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
  background-color:#fff;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2);
  & + & {
    margin-left: 150px;
  }
`;

export const FilterWrapper = styled.div`
  ${flexColumn};
  align-items: center;
`;

export const SortWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
`;

export const SortOption = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  & + & {
    margin-left: 2%;
  }
`;

export const PostsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
