import React from 'react';
import * as S from './style';
import { MdOutlineArrowBackIos, MdPersonAdd } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';

import { Test } from '../../assets/imgs';
import { DetailInfo } from '../../components';

const PostDetailPage = () => {
  const post = {
    title:
      '2학기 동안 알고리즘을 공부할 분을 모집합니다. 많은 지원 바랍니다. 2줄 이상 테스트 위해 엄청 길게 제목을 쓰고 있는 중입니다. 2줄 이상부터는 ...으로 ellipsis 되어야 합니다. 이제쯤 2줄이 되었으려나',
    author: '김경원',
    star: 21,
    category: 'study',
    skills: ['python', 'javascript', 'react'],
    status: '모집중',
    location: '서울',
    council: '혼합',
    detail:
      '해당 언어 6개월 공부했습니다. 파이썬을 기반으로 같이 백준 골드 찍어봅시다. 같이 하실 수준 비슷 하신 분 찾아요.해당 언어 6개월 공부했습니다. 파이썬을 기반으로 같이 백준 골드 찍어봅시다. 같이 하실 수준 비슷 하신 분 찾아요.',
    participants: ['나'],
    maxParticipants: 4,
    Date: '2021-11-16',
  };
  return (
    <S.PostDetailWrapper>
      <MdOutlineArrowBackIos fontSize="60px" cursor="pointer" />
      <S.PostDetailTitle>{post.title}</S.PostDetailTitle>
      <S.PostDetailInfo>
        <S.DetailInfoWrapper>
          <S.DetailInfoBetween>
            <S.DetailInfoLeft>
              <S.AuthorAvatar src={Test} /> {post.author}
            </S.DetailInfoLeft>
            <S.DetailInfoRight>{post.Date}</S.DetailInfoRight>
          </S.DetailInfoBetween>
          <DetailInfo title="모집유형" info={post.category} />
          <DetailInfo title="기술스택" info={post.skills} />
          <DetailInfo title="회의형태" info={post.council} />
          <DetailInfo title="지역" info={post.location} />
        </S.DetailInfoWrapper>
        <S.DetailInfoWrapper width="20%">
          <S.DetailInfoContent>
            <BiStar color="#E4DC00" /> &nbsp;{post.star}
          </S.DetailInfoContent>
          <S.DetailInfoContent>
            <MdPersonAdd /> &nbsp;모집자와 채팅하기
          </S.DetailInfoContent>
          <S.DetailInfoContent>
            <S.PostStatusCircle>
              <label>모집중</label>
              <label>
                {post.participants.length}/{post.maxParticipants}
              </label>
            </S.PostStatusCircle>
          </S.DetailInfoContent>
        </S.DetailInfoWrapper>
      </S.PostDetailInfo>
      <S.PostDetailContent>
        {post.detail}
      </S.PostDetailContent>
    </S.PostDetailWrapper>
  );
};

export default PostDetailPage;
