import styled, { css } from 'styled-components';

import { Paper } from '../../';
import { flexBetween, flexCenter } from '../../../constants';

export const CardWrapper = styled(Paper)`
  width: 45%;
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
  ${flexCenter}

  ${(props) =>
    props.status === '모집중'
      ? css`
          background-color: #dfd2f0;
        `
      : props.status === '진행중'
      ? css`
          background-color: #aa8ae8;
        `
      : css`
          background-color: #7944e3;
        `}
`;
export const CircleLabel = styled.label`
  color: #fff;
  font-size: 2.6rem;
  font-weight: bold;
`;
