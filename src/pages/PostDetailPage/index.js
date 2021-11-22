import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import { PostTotalInfo, ResultForm } from '../../components';

const PostDetailPage = () => {
  const me = '김경원'; //추후에 리덕스 상태를 가져올 것
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
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
    userList: [
      { userName: '김경원', avatar: '프로필이미지', id: 1 },
      { userName: '한윤석', avatar: '프로필이미지1', id: 2 },
    ],
    maxUserNum: 4,
    Date: '2021-11-16',
    file:"c:\\fakepath\\filename.pdfc:\\fakepath\\filename.pdf"
  };
  const onBackClick = useCallback(() => {
    history.go(-1);
  }, []);
  const openModal = useCallback(() => {
    setModalOpen(true);
  }, [modalOpen]);
  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, [modalOpen]);
  return (
    <S.PostDetailWrapper>
      <MdOutlineArrowBackIos fontSize="6rem" cursor="pointer" onClick={onBackClick} />
      <S.PostDetailTitle>{post.title}</S.PostDetailTitle>
      <S.UploadedFile download href={post.file}>첨부파일</S.UploadedFile>
      <PostTotalInfo
        post={post}
        modalOpen={modalOpen}
        closeModal={closeModal}
        openModal={openModal}
        me={me}
      />
      <S.PostDetailContent>{post.detail}</S.PostDetailContent>
      <ResultForm/>
    </S.PostDetailWrapper>
  );
};

export default PostDetailPage;
