import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { logoutUser, signinUser } from '../../modules/user';

const LogInProcess = () => {
  // callBack URL 에서 얻을 수 있는 정보
  // :id/:nickname/:accessToken/:signupCheck/:avatar1/:avatar2/:avatar3

  const { id, nickname, accessToken, signupCheck, avatar1, avatar2, avatar3 } =
    useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    if (JSON.parse(signupCheck)) {
      const data = {
        id: parseInt(id),
        nickname: nickname,
        avatar:
          avatar1 === '0' ? 'DefaultImg' : `/${avatar1}/${avatar2}/${avatar3}`,
      };
      dispatch(signinUser(data));
      history.push('/');
      setTimeout(() => {
        localStorage.setItem('accessToken', null);
        dispatch(logoutUser());
        window.location.replace(`/login`);
      }, 3600000);
    } else {
      history.push('/signup');
    }
  }, []);

  return (
    <>
      <h1>로그인 프로세스</h1>
    </>
  );
};

export default LogInProcess;
