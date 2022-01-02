import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from 'axios';

import { BackButton, DibsInfo, DibsPosts } from '../../components';

const DibsPage = () => {
  const [dibsPosts, setDibsPosts] = useState([]);
  const [apiQuery, setApiQuery] = useState('/posts/like?page=1&size=10&kinds=PROJECT');
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiQuery, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(response.data.content);
      setDibsPosts(response.data.content);
    };
    fetchData();
  }, [apiQuery]);

  return (
    <S.DibsPageWrapper>
      <BackButton />
      {dibsPosts && (
        <S.ContentsWrapper>
          <DibsInfo Posts={dibsPosts} setApiQuery={setApiQuery}/>
          <DibsPosts Posts={dibsPosts} />
        </S.ContentsWrapper>
      )}
    </S.DibsPageWrapper>
  );
};

export default DibsPage;
