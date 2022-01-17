import styled from 'styled-components';
import { flexColumn, flexBetween, flexCenter } from '../../constants';
import { FaBook } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

export const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0px;
  background: #f9fbfc;
`;

export const WrittingInnerForm = styled.form`
  background-color: white;
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.16);
  width: 76.8rem;
  padding: 5% 10% 5% 10%;
`;

export const CategoryWrapper = styled.div`
  ${flexBetween};
  margin-top: 5rem;
  @media all and (max-width: 768px) {
    ${flexColumn};
    align-items: center;
  }
`;

export const Book = styled(FaBook)`
  margin: 1rem;
`;

export const PersonAdd = styled(MdPersonAdd)`
  margin: 1rem;
`;

export const UserGroup = styled(HiUserGroup)`
  margin: 1rem;
`;

export const CategoryCard = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 12rem;
  background-color: ${props => props.backgroundColor};
  border: 1px solid black;
  border-radius: 10px;
  & + & {
    margin-left: 150px;
  }
  cursor: pointer;

  @media all and (max-width: 768px) {
    width: 100%;
    & + & {
      margin-left: 0px;
    }
    margin: 2rem 0rem;
  }
`;

export const MainTitle = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`;
export const InputBox = styled.input`
  width: ${props => props.width || '100%'};
  height: 7rem;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 0rem 3rem;
  font-size: 2rem;

  ::placeholder {
    ${flexCenter}
    font-size : 2rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const InputBoxPeople = styled.p`
  font-size: 2rem;
  margin-left: 1rem;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  margin-top: 5%;
`;
export const MeetEnviromentWrapper = styled.div`
  flex: 2;
  margin-right: 5rem;
`;

export const RecruitPeopleWrapper = styled.div`
  flex: 1;
`;

export const RadioWrapper = styled.div`
  width: 100%;
  ${flexBetween}
  margin-top : 1rem;
  & input[type='radio'] {
    margin-left: -30px;
    width: 10rem;
    height: 3rem;
  }

  & input[type='radio']:checked {
    width: 10rem;
    height: 3rem;
  }

  @media all and (max-width: 768px) {
    display: block;
    & input[type='radio'] {
      margin-left: -3rem;
    }
  }
`;

export const CheckBoxWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media all and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const MeetSelect = styled.select`
  width: 80%;
  padding: 20px;
  border-radius: 30px;
  font-size: 2rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
`;

export const AreaSelect = styled.select`
  width: 100%;
  border: none;
  font-size: 2rem;
  border-radius: 30px;
  padding: 2rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const FileInput = styled.label`
  display: block;
  width: 15rem;
  padding: 2rem 0rem;
  font-size: 2rem;
  background-color: #f383df;
  border-radius: 5rem;
  text-align: center;
  color: white;
  cursor: pointer;
`;

export const MainTextArea = styled.textarea`
  width: 100%;
  height: 54rem;
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 2rem;
`;

export const BtnWrapper = styled.div`
  margin-top: 8rem;
  padding: 10px;
  display: flex;
`;

export const BtnLeft = styled.button`
  width: 14rem;
  height: 7rem;
  font-size: 3rem;
  border-radius: 2rem;
  border: none;
  margin: auto 0 0 auto;
`;

export const BtnRight = styled.button`
  width: 26rem;
  height: 7rem;
  border: none;
  font-size: 3rem;
  border-radius: 2rem;
  background: #cdf6e8;
  margin-left: 3rem;
`;

export const FileWrapper = styled.div`
  display: flex;
  margin-top: 5%;
  margin-bottom: 3%;
`;

export const FileLeft = styled.div`
  flex: 1.5;
`;

export const FileRight = styled.div`
  flex: 1;
  padding: 5rem;
`;
