import styled, { css } from 'styled-components';

import { Paper } from '../../';
import { flexBetween, flexCenter, flexColumn } from '../../../constants';
import theme from '../../../common/theme';

export const CardWrapper = styled(Paper)`
  width: 45%;
  height:24rem;
  padding: 3rem 4rem;
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
