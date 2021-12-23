import React, { useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { Banner, PostCard, Footer, FilterArea, CategoryArea } from '../../components';
import { loadPosts } from '../../modules/post';

const LandingPage = () => {
  const [isCheck, setIsCheck] = useState(true);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const posts = useSelector(state => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const onCheck = useCallback(() => {
    setIsCheck(prev => !prev);
  }, []);
  const onRecruitOptionClick = useCallback(() => {});
  const onFinishOptionClick = useCallback(() => {});

  return (
    <S.LandingWrapper>
      {posts && (
        <>
          <Banner posts={posts} />
          <S.LandingDetailWrapper>
            <S.TitleWrapper>
              <S.DetailTitle>어떤 동료를 찾으시나요? &nbsp;</S.DetailTitle>
              <S.CheckboxWrapper>
                <S.StyledCheckbox onClick={onCheck}>{isCheck && <BsCheckLg />}</S.StyledCheckbox>
                &nbsp;전체보기
              </S.CheckboxWrapper>
            </S.TitleWrapper>
            <CategoryArea />
            <FilterArea
              dropDownOptions={dropDownOptions}
              setDropDownOptions={setDropDownOptions}
              onRecruitOptionClick={onRecruitOptionClick}
              onFinishOptionClick={onFinishOptionClick}
            />
            <S.PostsWrapper>
              {posts.map(v => {
                return <PostCard post={v} key={`post${v.id}`} />;
              })}
            </S.PostsWrapper>
          </S.LandingDetailWrapper>
          <Footer />
        </>
      )}
    </S.LandingWrapper>
  );
};

export default LandingPage;
