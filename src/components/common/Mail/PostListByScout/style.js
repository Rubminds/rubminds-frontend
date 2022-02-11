import styled from 'styled-components';

export const PostListWrapper = styled.div`
  height: 100%;
  margin-top: 1rem;
  background-color: #fff8;
  font-size: 1.6rem;
  padding: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.199);
  border-radius: 10px;
  overflow-y: auto;
  flex: 1 1 auto;
`;

export const Post = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid rgba(128, 128, 128, 0.199);
  position: relative;
`;

export const PostTitle = styled.h3`
  font-weight: 2rem;
  width:80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InviteBtn = styled.button`

`