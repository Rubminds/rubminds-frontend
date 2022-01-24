import styled from 'styled-components';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { flexCenter } from '../../../../constants';


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

export const PostTitle = styled.label`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export const Content = styled.div`
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
  display: flex;
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
  margin-left: 1rem;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;

export const InputWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Input = styled.input`
  height: 4rem;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 1rem;
  width: 100%;
`;

export const SendBtn = styled.button`
  ${flexCenter}
  font-size: 3rem;
  height: 4rem;
  width:4rem;
  padding:0.5rem 0.5rem;
  background-color: #fff;
  border:none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left:1px solid rgba(128,128,128,0.199);
  cursor:pointer;
`;
