import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const RedirectComponent = () => {
  useEffect(() => {
    alert('로그인이 필요한 서비스입니다.');
  });
  return <Redirect to="/login" />;
};

export default RedirectComponent;
