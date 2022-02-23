import styled from 'styled-components';
import { FcInvite } from 'react-icons/fc';
import { MdOutlineArrowBackIos } from 'react-icons/md';

export const Post = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.6rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.199);
  position: relative;
  color: ${props => props.kinds === 'SCOUT' && 'rgba(128, 128, 128, 0.199)'};
  &:hover {
    transform: scale(1.02);
  }
`;

export const PostTitle = styled.h3`
  font-weight: 2rem;
  font-size: 2rem;
  width: fit-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const BackBtn = styled(MdOutlineArrowBackIos)`
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;
/* 
export const InviteBtn = styled(FcInvite)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 2rem;
  height: 2rem;
  transform: translate(-50%, -50%);
  cursor:pointer;
`; */
