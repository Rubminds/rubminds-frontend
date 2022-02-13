import styled from 'styled-components';
import { flexBetween, flexCenter } from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';

export const DetailInfoBetween = styled.div`
  ${flexBetween};
  font-size: 1.6rem;
  & + & {
    margin-top: 5%;
  }
  ${mediaQuery({'font-size':'2rem'})}
`;
export const DetailInfoLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight:bold;
  flex: 1;
  position: relative;
  color: #707070;
  ${mediaQuery({ 'justify-content': 'center' })};
`;
export const DetailInfoRight = styled.div`
  ${flexCenter};
  flex: 2.5;
  flex-wrap: wrap;
  border-left: 1px solid rgba(128, 128, 128, 0.199);
  padding: 0 1rem;
  ${mediaQuery({ flex: '1' })};
`;
