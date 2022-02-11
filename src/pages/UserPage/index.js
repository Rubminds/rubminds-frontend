import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { BackButton, UserProfile, UserProjects, UserRating, UserDibs } from '../../components';

const UserPage = () => {
  const history = useHistory();
  const params = useParams();
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/user/${params.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        });
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        alert(err.response.data.error.info);
        history.go(-1);
      }
    };
    fetchData();
  }, []);

  const onEditProfile = () => {
    history.push('/editprofile');
  };

  return (
    <>
      {user && (
        <S.UserPageWrapper>
          <BackButton />
          {user.isMine && <S.EditProfile onClick={onEditProfile}>프로필 수정</S.EditProfile>}

          <UserProfile user={user} />
          <S.Division>
            <UserProjects user={user} />
            <UserRating user={user} />
          </S.Division>
          <UserDibs user={user} />
        </S.UserPageWrapper>
      )}
    </>
  );
};

export default UserPage;
