import React, { useEffect, useState, useCallback } from 'react';
import * as S from './style';
import axios from 'axios';

import { BackButton, DibsInfo, DibsPosts } from '../../components';

const DibsPage = () => {
  const [dibsPosts, setDibsPosts] = useState([]);
  const [dibsNum, setDibsNum] = useState({STUDY:0, PROJECT:0, SCOUT:0});
  const [apiQuery, setApiQuery] = useState('/api/posts/like?page=1&size=10');
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiQuery, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(response.data.content);
      apiQuery === '/posts/like?page=1&size=10' && getKindsNum(response.data.content);
      setDibsPosts(response.data.content);
    };
    fetchData();
  }, [apiQuery]);

  const getKindsNum = useCallback(posts => {
    const kindsArray = Object.keys(dibsNum);
    kindsArray.forEach(kinds => {
      const kindPostLen = posts.filter(e => e.kinds === kinds).length;
      const oldDibNum = dibsNum;
      oldDibNum[kinds]=kindPostLen
      setDibsNum(oldDibNum);
    })
    console.log(dibsNum)
  }, [dibsNum]);

  const setQueryByKinds = useCallback(
    kinds => () => {
      if (apiQuery.includes('&kinds=')) {
        const startIdx = apiQuery.indexOf('&kinds=');
        const initialQuery = apiQuery.substring(0, startIdx);
        setApiQuery(`${initialQuery}&kinds=${kinds}`);
      } else {
        setApiQuery(prev => prev + `&kinds=${kinds}`);
      }
    },
    [apiQuery, setApiQuery],
  );

  return (
    <S.DibsPageWrapper>
      <BackButton />
      {dibsPosts && (
        <S.ContentsWrapper>
          <DibsInfo dibsNum={dibsNum} setQueryByKinds={setQueryByKinds} />
          <DibsPosts Posts={dibsPosts} />
        </S.ContentsWrapper>
      )}
    </S.DibsPageWrapper>
  );
};

export default DibsPage;
