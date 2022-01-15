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

export const TextArea = styled.textarea`
  margin-top: 1rem;
  background-color: #fff;
  font-size: 1.6rem;
  padding: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.199);
  border-radius: 10px;
  height: 100%;
  overflow-y: auto;
  resize: none;
`;

export const SendBtn = styled.button`
  margin-top: 1rem;
  width: 10rem;
  height: 5rem;
  border: none;
  background-color: #ffa586;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
`;
