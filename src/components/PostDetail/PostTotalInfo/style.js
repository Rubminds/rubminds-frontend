import styled, { css } from 'styled-components';
import { flexBetween, flexColumn} from '../../../constants';
import mediaQuery from '../../../hooks/mediaQuery';
import { lighten } from 'polished';

export const PostDetailInfo = styled.div`
  ${flexBetween};
  position: relative;
  align-items: flex-start;
  margin-top: 5rem;
  ${mediaQuery({
    'flex-direction': 'column-reverse',
    'justify-content': 'reverse',
    'align-items': 'center',
  })};
`;

export const DetailInfoWrapper = styled.div`
  ${flexColumn};
  width: ${props => (props.width ? props.width : '40%')};
  ${mediaQuery({ width: '60%', 'margin-top': '2rem' })};
  ${props =>
    props.Group &&
    css`
      @media all and (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-around;
        width: 100%;
      }
    `}
`;
export const DetailUserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 5%;
  font-weight: bold;
  width:fit-content;
  cursor:${props => props.cursor && "pointer"};
  ${mediaQuery({ 'justify-content': 'center', 'font-size': '2rem' })}
`;

export const AuthorAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const DetailInfoContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight:bold;
  font-size: 1.6rem;
  margin-bottom: 2rem;

  ${props =>
    props.toBtn &&
    css`
      background-color: ${props => (props.blue ? '#56ACEE' : '#ffa586')};
      padding: 1rem 1.5rem;
      border-radius: 20px;
      color: #fff;
      font-weight: bold;
      width: fit-content;
      height: fit-content;
      ${mediaQuery({ width: 'max-content' })};
      margin-bottom: ;
    `}
`;
export const PostStatusCircle = styled.button`
  width: 14rem;
  height: 14rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  ${flexColumn};
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.6rem;
  font-weight: bold;
  background-color: ${props =>
    props.status === '모집중' ? '#aa8ae8' : props.status === '진행중' ? '#966BEB' : '#7944e3'};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  & label {
    cursor: pointer;
  }
  &:hover{
    transform:scale(1.02);
  }
`;

export const GroupBox = styled.div`
  ${flexColumn};
  width: auto;
  justify-content: center;
`;

export const LikeWrapper = styled.div``;
export const UploadedFile = styled.a`
  width: 90%;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 1rem 0;
  text-align:center;
  display:flex;
`;

export const FileContainer = styled.div`
  ${flexColumn};
`;
