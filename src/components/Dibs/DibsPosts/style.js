import styled from 'styled-components';
import mediaQuery from '../../../hooks/mediaQuery';

export const DibsPostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  margin-top:5rem;
  ${mediaQuery({"flex-direction":"column", "align-items":"center"})}
`;
