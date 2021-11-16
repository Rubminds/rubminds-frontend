import styled from 'styled-components';
import { flexBetween, flexCenter } from '../../../constants';

export const DetailInfoBetween = styled.div`
  ${flexBetween};
  font-size: 16px;
  & + & {
    margin-top: 3%;
  }
`;
export const DetailInfoLeft = styled.div`
  ${flexCenter};
  flex: 1;
  position: relative;
`;
export const DetailInfoRight = styled.div`
  ${flexCenter};
  flex: 1;
  flex-wrap: wrap;
  border-left: 1px solid rgba(128, 128, 128, 0.199);
`;
