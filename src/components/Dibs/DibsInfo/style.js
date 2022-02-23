import styled from 'styled-components';
import { flexBetween, flexColumn } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';

export const DibsInfoWrapper = styled.div`
  width: 40%;
  ${mediaQuery({
    width: '80%',
    'background-color': '#fff',
    'border-radius': '20px',
    'box-shadow':'3px 3px 20px rgba(0, 0, 0, 0.2)',
    padding: '2rem 2rem',
  })}
`;
export const Title = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;
export const Content = styled.div`
  ${flexBetween};
  margin-top: 5rem;
  width: 100%;
  ${mediaQuery({ 'justify-content': 'space-around' })}
`;
export const Type = styled.div`
  ${flexColumn}
  justify-content:center;
  align-items: center;
`;
export const TypeName = styled.label`
  font-size: 1.6rem;
  cursor:pointer;
`;

export const ValueLabel = styled.label`
  font-size: 2.4rem;
  font-weight: bold;
  cursor:pointer;
`;
