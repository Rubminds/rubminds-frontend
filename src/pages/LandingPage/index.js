import React, { useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { Banner, PostCard, Footer, FilterArea, CategoryArea } from '../../components';
import { loadPosts } from '../../modules/post';

const LandingPage = () => {
  const [isCheck, setIsCheck] = useState(true);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [apiQuery, setApiQuery] = useState('?page=1&size=10');
  const [kinds, setKinds] = useState('');
  const [postStatus, setPostStatus] = useState('');
  const posts = useSelector(state => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(apiQuery));
  }, [apiQuery, dispatch]);

  const onCheck = useCallback(() => {
    setIsCheck(prev => !prev);
  }, []);

  const onKindsClick = useCallback(
    option => () => {
      console.log(option);
      if (apiQuery.includes('kinds')) {
        const currentQuery = apiQuery;
        const changedQuery = currentQuery.replace(kinds, option);
        setApiQuery(changedQuery);
      } else {
        setApiQuery(prev => prev + `&kinds=${option}`);
      }
      setKinds(option);
    },
    [kinds, apiQuery],
  );
  const onPostStatusClick = useCallback(
    option => () => {
      console.log(option);
      if (apiQuery.includes('status')) {
        const currentQuery = apiQuery;
        const changedQuery = currentQuery.replace(postStatus, option);
        setApiQuery(changedQuery);
      } else {
        setApiQuery(prev => prev + `&status=${option}`);
      }
      setPostStatus(option);
    },
    [apiQuery, postStatus],
  );

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
            <CategoryArea onKindsClick={onKindsClick} />
            <FilterArea
              dropDownOptions={dropDownOptions}
              setDropDownOptions={setDropDownOptions}
              onPostStatusClick={onPostStatusClick}
              postStatus={postStatus}
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
