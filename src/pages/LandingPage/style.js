import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../constants';

export const LandingWrapper = styled.div`
  ${flexColumn};
  position: relative;
`;

export const LandingDetailWrapper = styled.div`
  width: 100%;
  padding: 4.8rem 16rem;
  ${flexColumn};
  background-color:#F9FBFC;
  min-height:1vh;
  @media all and (max-width: 768px) {
    padding: 2rem 5%;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  ${flexCenter};
  position: relative;
  margin-top: 2rem;
  @media all and (max-width: 768px) {
    padding:4rem 0;
    margin-top:0;
  }
`;

export const DetailTitle = styled.label`
  font-size: 3rem;
  font-weight:bold;
  display: flex;
  width: 100%;
  ${flexCenter};
  margin-top:5rem;
`;
export const DetailShowAll = styled.div`
  position: absolute;
  right: 30%;
`;

export const StyledCheckbox = styled.div`
  background-color: #80e9c6;
  width: 3rem;
  height: 3rem;
  border-radius: 20%;
  ${flexCenter};
  color: #ffffff;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.label`
  position: absolute;
  right: 1%;
  bottom:1%;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const CategoryWrapper = styled.div`
  ${flexCenter};
  margin-top: 5rem;
`;

export const CategoryCard = styled.button`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 12rem;
  background-color:#fff;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2);
  & + & {
    margin-left: 5rem;
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
  margin-top: 5rem;
`;

export const SortOption = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  & + & {
    margin-left: 2%;
  }
`;

export const PostsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top:3rem;
  width:100%;
  @media all and (max-width:768px){
    ${flexColumn};
    align-items:center;
  }
`;
