import styled from 'styled-components';
import {Link} from 'react-router-dom'

import { Paper } from '../..';
import { flexBetween, flexColumn } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';

export const CardWrapper = styled(Paper)`
  margin-top: 5rem;
  width: 45%;
  height: auto;
  padding: 3rem 4rem;
  ${mediaQuery({ width: '100%' })}
`;
export const TitleWrapper = styled.div`
  ${flexBetween};
`;
export const Title = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;
export const TitleDetail = styled(Link)`
  font-size: 1.2rem;
  color: rgba(128, 128, 128);
  text-decoration: underline;
  text-underline-position: under;
`;
export const Content = styled.div`
  ${flexBetween};
  margin-top: 5rem;
  width: 100%;
`;
export const Type = styled.div`
  ${flexColumn}
  justify-content:center;
  align-items: center;
`;
export const TypeName = styled.label`
  font-size: 1.6rem;
`;

export const ValueLabel = styled.label`
  font-size: 2.4rem;
  font-weight: bold;
`;
