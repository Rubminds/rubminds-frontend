import styled, { css } from 'styled-components';

import { Paper } from '../../';
import { flexBetween, flexCenter, flexColumn } from '../../../constants';
import theme from '../../../common/theme';
import mediaQuery from '../../../hooks/mediaQuery';

export const CardWrapper = styled(Paper)`
  width: 45%;
  height: 24rem;
  padding: 3rem 4rem;
  ${mediaQuery({"width":"100%"})}
`;
export const Title = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;
export const Content = styled.div`
  ${flexBetween}
  margin-top:5rem;
`;

export const StatusCircle = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  cursor: pointer;
  ${flexColumn};
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  & label{
    cursor:pointer;
  }

  ${(props) =>
    props.status === '모집중'
      ? css`
          background-color: ${theme.colors.status1Color};
        `
      : props.status === '진행중'
      ? css`
          background-color: ${theme.colors.status2Color};
        `
      : css`
          background-color: ${theme.colors.status3Color};
        `}
`;
export const CircleLabel = styled.label`
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
`;
