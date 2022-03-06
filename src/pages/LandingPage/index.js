import React, { useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Banner, PostCard, Footer, FilterArea, CategoryArea } from '../../components';

const LandingPage = () => {
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [customOptions, setCustomOptions] = useState([]);
  const [apiQuery, setApiQuery] = useState('?page=1&size=10');
  const [kinds, setKinds] = useState('');
  const [postStatus, setPostStatus] = useState('');
  const [region, setRegion] = useState('');
  const [skills, setSkills] = useState([]);
  const [posts, setPosts] = useState([]);

  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response =
        me && localStorage.getItem('accessToken')
          ? await axios.get(`/posts${apiQuery}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            })
          : await axios.get(`/posts${apiQuery}`);
      setPosts(response.data.content);
    };
    fetchData();
  }, [apiQuery, me, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/skills');
      setSkills(result.data.skills);
    };
    fetchData();
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

  const onRegionClick = useCallback(
    option => () => {
      const currentQuery = apiQuery;
      let changedQuery = currentQuery.replace(region, '');
      changedQuery = changedQuery.replace('&region=', '');
      setRegion(option);
      option === ''
        ? setApiQuery(`${changedQuery}`)
        : setApiQuery(`${changedQuery}&region=${option}`);
    },
    [apiQuery, region],
  );

  const isFilteredSkill = post => {
    if (dropDownOptions.length === 0 && customOptions.length === 0) {
      return true;
    }
    const allPostSkills = post.skill.map(v=>v.name).concat(post.customSkills.map(v => v.name));
    const allFilteredSkills = dropDownOptions.concat(customOptions);
    const combinedSkills = allPostSkills.concat(allFilteredSkills);
    const allSkillSet = new Set([...combinedSkills]);
    return allSkillSet.size !== combinedSkills.length;
  };

  return (
    <S.LandingWrapper>
      {posts && (
        <>
          <Banner />
          <S.LandingDetailWrapper>
            <S.TitleWrapper>
              <S.DetailTitle>어떤 동료를 찾으시나요? &nbsp;</S.DetailTitle>
            </S.TitleWrapper>
            <CategoryArea onKindsClick={onKindsClick} kinds={kinds} />
            <FilterArea
              dropDownOptions={dropDownOptions}
              setDropDownOptions={setDropDownOptions}
              customOptions={customOptions}
              setCustomOptions={setCustomOptions}
              onPostStatusClick={onPostStatusClick}
              onRegionClick={onRegionClick}
              region={region}
              postStatus={postStatus}
              skills={skills}
            />
            <S.PostsWrapper>
              {posts.map(v => {
                return isFilteredSkill(v) && <PostCard post={v} key={`post${v.id}`} />;
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
