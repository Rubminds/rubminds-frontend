import styled from 'styled-components';
import { flexCenter, flexBetween} from '../../constants';
import mediaQuery from '../../hooks/mediaQuery';

export const MainTitle = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  font-size: ${props => props.fontSize && props.fontSize};
  color: ${props => props.color && props.color};
  font-weight: ${props => props.fontWeight && props.fontWeight};
`;

export const AllWrapper = styled.div` 
  background: #f9fbfc;
  padding : 5rem 0px;
  display : flex; 
  justify-content : center; 
`; 

export const EditProfileWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 3%;
  ${mediaQuery({
    width: '100%',
    height: '100vh',
    padding: '7.5%, 7.5%, 0%, 7.5%',
  })}
`;

export const EditProfileInnerForm = styled.form`
  /* background: red; */
  margin-top: 5rem;
  padding-bottom: 5rem;
`;

export const ProfileWrapper = styled.div`
  ${flexCenter}
  margin : auto;
  color: grey;
`;

export const NickNameWrapper = styled.div`
  display: flex;
`;

export const NickNameBox = styled.input`
  flex: 2;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 0rem 3rem 0rem 3rem;
  border-radius: 3rem;
  padding: 2rem;
  font-size: 2rem;
`;

export const NickNameChecked = styled.div`
  flex: 2;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 0rem 3rem 0rem 3rem;
  border-radius: 3rem;
  padding: 2rem;
  font-size: 2rem;
`;

export const CheckBox = styled.input`
  flex: 1;
  margin-left: 3rem;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
  font-size: 2rem;
  background-color: #cdf6e8;
  white-space: nowrap;
  cursor: pointer;
`;

export const JobWrapper = styled.div`
  ${flexBetween}
`;

export const JobCheckBtn = styled.input`
  width: 30%;
  white-space: nowrap;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
  border: none;
  background-color: ${props => props.name === props.selected ? '#CDF6E8' : '#fff'};
  padding: 2rem;
  font-size: 2rem;
  cursor : pointer; 
`;

export const Introduce = styled.textarea`
  width: 100%;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  min-height: 500px;
  font-size: 20px;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 130px;
`;

export const SubmitBtn = styled.button`
  float: right;
  font-size: 2rem;
  padding: 2rem 4rem;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
  background-color: #cdf6e8;
  white-space: nowrap;
  @media all and (max-width: 768px) {
    width: 30%;
  }
`;

export const Clear = styled.div`
  clear: both;
`;
