import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../constants';
import mediaQuery from '../../hooks/mediaQuery';

export const PostDetailWrapper = styled.div`
  width: 100%;
  padding: 4rem 16rem 12rem 16rem;
  background-color: #f9fbfc;
  ${flexColumn};
  ${mediaQuery({ padding: '2rem 4rem 12rem 4rem' })}
`;

export const PostDetailTitle = styled.div`
  width: 100%;
  margin-top: 2.8rem;
  font-size: 3rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PostDetailContent = styled.div`
  width: 100%;
  margin: 5rem 0;
  font-size: 1.8rem;
  line-height: 4rem;
`;

export const PostDetailDate = styled.label`
  font-size: 1.6rem;
  color: rgba(128, 128, 128);
`;
