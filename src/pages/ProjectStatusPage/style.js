import styled from 'styled-components';

import { flexColumn } from '../../constants';
import mediaQuery from '../../hooks/mediaQuery';
import { Paper,PostCard } from '../../components';

export const ProjectStatusPageWrapper = styled.div`
  width: 100%;
  padding: 4rem 16rem 20rem 16rem;
  background-color: #f9fbfc;
  ${flexColumn};
  ${mediaQuery({ padding: '2rem 3rem 24rem 3rem' })}
`;

export const ContentsWrapper = styled(Paper)`
  width: 100%;
  height: auto;
  ${flexColumn};
  margin-top: 5rem;
  padding: 4rem 6rem;
  ${mediaQuery({
    'box-shadow': 'none',
    'background-color': 'inherit',
    padding: '0',
  })}
`;

export const Title = styled.label`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2rem;
  ${mediaQuery({ 'font-size': '2.5rem' })}
`;

export const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  ${mediaQuery({"flex-direction":"column", "align-items":"center"})}
`;
