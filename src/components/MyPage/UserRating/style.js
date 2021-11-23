import styled, { css } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

import { Paper } from '../../';
import { flexBetween, flexCenter, flexColumn } from '../../../constants';
import theme from '../../../common/theme';
import mediaQuery from '../../../hooks/mediaQuery';

export const CardWrapper = styled(Paper)`
  width: 45%;
  height: 24rem;
  padding: 3rem 4rem;
  ${mediaQuery({ width: '100%', 'margin-top': '5rem' })}
`;
export const Title = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;
export const Content = styled.div`
  ${flexColumn};
  justify-content: space-between;
  margin-top: 5rem;
  width: 100%;
`;
export const RatingWrapper = styled.div`
  width: 100%;
  ${flexBetween};
  font-size: 1.6rem;
  font-weight: bold;
  &:first-child {
    margin-bottom: 3rem;
  }
  & label {
    flex: 1;
  }
`;

export const StarWrapper = styled.div`
  ${flexBetween};
  flex: 1.5;
`;

export const Star = styled(AiFillStar)`
  color: ${(props) => (props.filled ? '#FFD975' : '#f0f0f0')};
  font-size: 2.6rem;
  ${(props) =>
    props.ratio &&
    css`
      fill: linea;
    `}
`;

export const HiddenSvg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
`;
