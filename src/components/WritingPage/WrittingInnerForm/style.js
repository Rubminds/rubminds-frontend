import styled from 'styled-components'
import { flexColumn, flexBetween, flexCenter } from '../../../constants'
import { FaBook } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'

export const WrittingBackGround = styled.div`
  background-color: #f9fbfc;
  padding: 5% 10% 5% 10%;
`

export const WrittingInnerForm = styled.form`
  background-color: white;
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.16);
  padding: 5% 10% 5% 10%;
  position: relative;
`

export const CategoryWrapper = styled.div`
  ${flexBetween};
  margin-top: 5rem;
  @media all and (max-width: 768px) {
    ${flexColumn};
    align-items: center;
  }
`

export const Book = styled(FaBook)`
  margin: 1rem;
`

export const PersonAdd = styled(MdPersonAdd)`
  margin: 1rem;
`

export const UserGroup = styled(HiUserGroup)`
  margin: 1rem;
`

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
`

export const MainTitle = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`
export const InputBox = styled.input`
  width: ${props => props.width || '100%'};
  height: 7rem;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 0px 30px 0px 30px;
  font-size: 3rem;

  ::placeholder {
    ${flexCenter}
    font-size : 2rem;
  }
`

export const InputBoxPeople = styled.span`
  font-size: 2rem;
  margin-left: 1rem;
`

export const MiddleWrapper = styled.div`
  display: flex;
  margin-top: 5%;
`

export const RecruitPeopleWrapper = styled.div`
  flex: 1;
`

export const MeetEnviromentWrapper = styled.div`
  flex: 1.2;
`

export const RadioWrapper = styled.div`
  ${flexBetween}
  padding: 1rem 15rem 0 0;
  & input {
    width: 3rem;
    height: 3rem;
  }

  & input[type='radio']:checked {
    width: 3rem;
    height: 3rem;
    background: #998cf8;
  }

  @media all and (max-width: 768px) {
    display: block;
  }
`

export const CheckBoxWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  & label {
    padding-left: 1rem;
  }

  @media all and (max-width: 768px) {
    margin: 1rem 0;
  }
`

export const MeetSelect = styled.select`
  width: 80%;
  padding: 20px;
  border-radius: 30px;
  font-size: 2rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
`

export const EnviromentCheck = styled.input`
  width: 3rem;
  height: 3rem;
  border: 1px;
`
export const AreaSelect = styled.select`
  width: 50%;
  border: none;
  font-size: 2rem;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`

export const FileInput = styled.label`
  padding: 2rem 5rem;
  font-size: 2rem;
  background-color: #f383df;
  border-radius: 5rem;
  display: block;
  width: 10rem;
  text-align: center;
  color: white;
  cursor: pointer;
`

export const MainTextArea = styled.textarea`
  width: 100%;
  height: 54rem;
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 2rem;
`

export const BtnWrapper = styled.div`
  margin-top: 8rem;
  padding: 10px;
  display: flex;
`

export const BtnLeft = styled.button`
  width: 14rem;
  height: 7rem;
  font-size: 3rem;
  border-radius: 2rem;
  border: none;
  margin: auto 0 0 auto;
`

export const BtnRight = styled.button`
  width: 26rem;
  height: 7rem;
  border: none;
  font-size: 3rem;
  border-radius: 2rem;
  background: #cdf6e8;
  margin-left: 3rem;
`

export const FileWrapper = styled.div`
  display: flex;
  margin-top: 5%;
  margin-bottom: 3%;
`

export const FileLeft = styled.div`
  flex: 1;
`

export const FileRight = styled.div`
  flex: 1;
  padding: 5rem;
`
