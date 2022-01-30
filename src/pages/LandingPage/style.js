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
  background-color: #f9fbfc;
  min-height: 1vh;
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
    padding: 4rem 0;
    margin-top: 0;
  }
`;

export const DetailTitle = styled.label`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  width: 100%;
  ${flexCenter};
  margin-top: 5rem;
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
  bottom: 1%;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const PostsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  width: 100%;
  min-height: 30rem;
  @media all and (max-width: 768px) {
    ${flexColumn};
    align-items: center;
  }
`;
