import styled from 'styled-components';
import { flexCenter, flexBetween } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';

export const MainTitle = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`

export const SignUpPageRightWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  padding: 7.5% 7.5% 7.5% 7.5%;
  background: white;
  ${mediaQuery({
    width: '100%',
    height: '100vh',
    padding: '7.5%, 7.5%, 0%, 7.5%',
  })}
`

export const SignUpPageInnerForm = styled.form`
  position: relative;
  margin-top: 5rem;
  padding-bottom: 5rem;
`

export const ProfileWrapper = styled.div`
  ${flexCenter}
  margin : auto;
  color: grey;
`

export const NickNameWrapper = styled.div`
  width: 100%;
  @media all and (max-width: 443px) {
    display: flex;
  }
`

export const NickNameBox = styled.input`
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  width: 60%;
  height: 7rem;
  border-radius: 3rem;
  padding: 0rem 3rem 0rem 3rem;
  font-size: 3rem;
  margin-right: 5%;

`

export const CheckBox = styled.button`
  height: 7rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
  font-size: 3rem;
  background-color: #cdf6e8;
  border: none;
  padding: 0rem 3rem 0rem 3rem;
  width: 30%;
  font-size: 2rem;
  margin-left: 5%;
  @media all and (max-width: 768px) {
    font-size: 1.8vw;
    padding: 0rem 2rem;
  }
`;

export const JobWrapper = styled.div`
  ${flexBetween}
`

export const JobCheckBtn = styled.button`
  width: 30%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
  border: none;
  background-color: ${props => props.backgroundColor || 'white'};
  padding: 2rem;
  font-size: 2rem;
`

export const Introduce = styled.textarea`
  width: 100%;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  min-height: 500px;
  font-size: 20px;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 130px;
`

export const SubmitBtn = styled(CheckBox)`
  position: absolute;
  bottom: 5rem;
  right: 0;
  padding: 0rem 5rem 0rem 5rem;
`