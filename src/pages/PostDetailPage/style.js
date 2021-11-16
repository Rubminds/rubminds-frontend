import styled from 'styled-components';
import { flexColumn, flexCenter, flexBetween } from '../../constants';

export const PostDetailWrapper = styled.div`
  width: 100%;
  padding: 3% 10%;
  ${flexColumn};
`;

export const PostDetailTitle = styled.div`
  width: 90%;
  margin-top: 2%;
  font-size: 40px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PostDetailInfo = styled.div`
  ${flexBetween};
  align-items:flex-start;
  margin-top: 2%;
`;

export const DetailInfoWrapper = styled.div`
  ${flexColumn};
  width: 30%;
`;
export const DetailInfoBetween = styled.div`
  ${flexBetween};
  font-size: 16px;
  margin-bottom: 3%;
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

export const AuthorAvatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const DetailInfoContent = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 3%;
  }
`;
export const PostStatusCircle = styled.div`
    width:140px;
    height:140px;
    border-radius:50%;
    ${flexCenter};
    color:#fff;
    font-size:26px;
    font-weight:bold;
    background-color:#AA8AE8;
`