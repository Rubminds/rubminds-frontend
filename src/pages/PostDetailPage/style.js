import styled from 'styled-components';
import { flexColumn, flexCenter, flexBetween } from '../../constants';

export const PostDetailWrapper = styled.div`
  width: 100%;
  padding: 3% 10%;
  ${flexColumn};
`;

export const PostDetailTitle = styled.div`
  width: 100%;
  margin-top: 2%;
  font-size: 30px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PostDetailInfo = styled.div`
  ${flexBetween};
  align-items: flex-start;
  margin-top: 5%;
`;

export const DetailInfoWrapper = styled.div`
  ${flexColumn};
  width: ${(props) => (props.width ? props.width : '35%')};
`;
export const DetailInfoBetween = styled.div`
  ${flexBetween};
  font-size: 16px;
  margin-bottom: 5%;
`;
export const DetailInfoLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
`;
export const DetailInfoRight = styled.div`
  ${flexCenter}
  flex: 2.5;
  flex-wrap: wrap;
  padding: 0 1%;
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
    margin-top: 5%;
  }
`;
export const PostStatusCircle = styled.button`
  width: 140px;
  height: 140px;
  padding: 0;
  border: none;
  border-radius: 50%;
  ${flexColumn};
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  background-color: #aa8ae8;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  & label {
    cursor: pointer;
  }
`;

export const PostDetailContent = styled.div`
  width: 100%;
  margin-top: 5%;
  font-size: 18px;
`;
