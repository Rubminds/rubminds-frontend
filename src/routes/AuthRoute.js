import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RedirectComponent from './RedirectComponent';

const AuthRoute = ({ path, component }) => {
  const { me } = useSelector(state => state.user);

  return me ? ( // 로그인 했을 시 접근 불가 페이지들
    <Route exact path={path} component={component} />
  ) : (
    <RedirectComponent />
  );
};

export default AuthRoute;
