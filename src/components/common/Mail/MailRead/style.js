import styled from 'styled-components';
import { MdOutlineArrowBackIos } from 'react-icons/md';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BackBtn = styled(MdOutlineArrowBackIos)`
  margin-top: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const UserName = styled.label`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Messages = styled.div`
  margin-top: 1rem;
  background-color: #fff8;
  font-size: 1.6rem;
  padding: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.199);
  border-radius: 10px;
  height: 100%;
  overflow-y: auto;
`;

export const BtnWrapper = styled.div`
  margin-top: 1rem;
  display:flex;
`;

export const ResendBtn = styled.button`
  width: 10rem;
  height: 4rem;
  border: none;
  background-color: #fff8;
  border-radius: 30px;
  font-weight: bold;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;

export const DeleteBtn = styled.button`
  width: 10rem;
  height: 4rem;
  border: none;
  background-color: #ffa586;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  margin-left:1rem;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;
