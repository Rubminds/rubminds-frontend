import React, { useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { Banner, PostCard, Footer, FilterArea, CategoryArea } from '../../components';
import { loadPosts } from '../../modules/post';

const LandingPage = () => {
  const [selectAll, setSelectAll] = useState(true);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [apiQuery, setApiQuery] = useState('?page=1&size=10');
  const [kinds, setKinds] = useState('');
  const [postStatus, setPostStatus] = useState('');
  const posts = useSelector(state => state.post.posts);
  const dibsPosts = posts.filter(e => e.isLike === true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(apiQuery));
  }, [apiQuery, dispatch]);

  const onCheck = useCallback(() => {
    setSelectAll(prev => !prev);
  }, []);

  const onKindsClick = useCallback(
    option => () => {
      if (apiQuery.includes('kinds')) {
        const currentQuery = apiQuery;
        let changedQuery;
        if (kinds === option) {
          changedQuery = currentQuery.replace(kinds, '');
          changedQuery = changedQuery.replace('&kinds=', '');
          setKinds('');
        } else {
          changedQuery = currentQuery.replace(kinds, option);
          setKinds(option);
        }
        setApiQuery(changedQuery);
      } else {
        setApiQuery(prev => prev + `&kinds=${option}`);
        setKinds(option);
      }
    },
    [kinds, apiQuery],
  );
  const onPostStatusClick = useCallback(
    option => () => {
      if (apiQuery.includes('status')) {
        const currentQuery = apiQuery;
        let changedQuery;
        if (postStatus === option) {
          changedQuery = currentQuery.replace(postStatus, '');
          changedQuery = changedQuery.replace('&status=', '');
          setPostStatus('');
        } else {
          changedQuery = currentQuery.replace(postStatus, option);
          setPostStatus(option);
        }
        setApiQuery(changedQuery);
      } else {
        setApiQuery(prev => prev + `&status=${option}`);
        setPostStatus(option);
      }
    },
    [apiQuery, postStatus],
  );

  return (
    <S.LandingWrapper>
      {posts && (
        <>
          <Banner posts={dibsPosts} />
          <S.LandingDetailWrapper>
            <S.TitleWrapper>
              <S.DetailTitle>어떤 동료를 찾으시나요? &nbsp;</S.DetailTitle>
              {/* <S.CheckboxWrapper>
                <S.StyledCheckbox onClick={onCheck}>{selectAll && <BsCheckLg />}</S.StyledCheckbox>
                &nbsp;전체보기
              </S.CheckboxWrapper> */}
            </S.TitleWrapper>
            <CategoryArea onKindsClick={onKindsClick} kinds={kinds} />
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
