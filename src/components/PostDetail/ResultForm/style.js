import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../../constants';

export const ResultFormWrapper = styled.form`
  background-color: #f9fbfc;
  ${flexColumn};
  width: 100%;
`;

export const FormBigTitle = styled.label`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export const FormSmallTitle = styled.label`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export const Submit = styled.button`
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

export const ContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const UploadFile = styled.label`
  background-color: #ffa586;
  color: #fff;
  font-weight: bold;
  ${flexCenter};
  padding: 1rem 1.5rem;
  border-radius: 20px;
  width: fit-content;
  font-size: 1.6rem;
  cursor: pointer;
`;
export const UploadFileName = styled.label`
  font-size: 1.2rem;
  margin-left: 1rem;
  font-weight: bold;
`;
export const TextArea = styled.textarea`
  width: ${props => (props.width ? props.width : '100%')};
  background-color: #fff;
  font-size: 1.6rem;
  padding: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.199);
  border-radius: 10px;
  height: auto;
  min-height: 15rem;
  resize: none;
`;

export const Input = styled.input`
  width: ${props => (props.width ? props.width : '100%')};
  background-color: #fff;
  font-size: 1.6rem;
  padding: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.199);
  border-radius: 10px;
  box-sizing: border-box;
`;
