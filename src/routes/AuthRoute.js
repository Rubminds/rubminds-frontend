import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ path, Component }) => {
  const { me } = useSelector(state => state.user);

  return me ? ( // 로그인 했을 시 접근 불가 페이지들
    <Route exact path={path} component={Component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default AuthRoute;
