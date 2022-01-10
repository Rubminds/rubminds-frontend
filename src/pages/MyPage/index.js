import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { BackButton, UserProfile, UserProjects, UserRating, UserDibs } from '../../components';

const MyPage = () => {
  const history = useHistory(); 
  const params = useParams();
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      console.log('start');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${params.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      });
      setUser(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);
 
  const onEditProfile = () => {
    history.push('/editprofile'); 
  }

  return (
    <>
      {user && (
        <S.MyPageWrapper>
          <BackButton />
          {user.isMine && <S.EditProfile onClick={onEditProfile}>프로필 수정</S.EditProfile>}

          <UserProfile user={user} />
          <S.Division>
            <UserProjects user={user} />
            <UserRating user={user} />
          </S.Division>
          <UserDibs user={user} />
        </S.MyPageWrapper>
      )}
    </>
  );
};

export default MyPage;
