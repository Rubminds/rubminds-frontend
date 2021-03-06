import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthRoute } from '../routes';
import theme from '../common/theme';
import GlobalStyles from '../common/GlobalStyle';
import LandingPage from './LandingPage';
import WrittingPage from './WrittingPage';
import PostDetailPage from './PostDetailPage';
import LogInPage from './LogInPage';
import LogInProcess from './LogInProcess';
import SignUpPage from './SignUpPage';
import UserPage from './UserPage';
import DibsPage from './DibsPage';
import ProjectStatusPage from './ProjectStatusPage';
import EditProfilePage from './EditProfilePage';
import EditPostPage from './EditPostPage';
import { Header, MailButton } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../modules/user';

const App = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    if (me !== null) {
      setTimeout(() => {
        localStorage.removeItem('accessToken');
        dispatch(logoutUser());
      }, 3600000);
    }
  }, [me]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <MailButton />
        <Switch>
          <Route
            exact
            path="/callback/:id/:nickname/:accessToken/:signupCheck/:avatar1/:avatar2?/:avatar3?"
            component={LogInProcess}
          />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/" component={LandingPage} />
          <AuthRoute exact path="/post/:id" component={PostDetailPage} />
          <Route path="/login" component={LogInPage} />
          <AuthRoute path="/editpost/:id" component={EditPostPage} />
          <AuthRoute path="/write" component={WrittingPage} />
          <AuthRoute path="/editprofile" component={EditProfilePage} />
          <AuthRoute path="/userPage/:id" component={UserPage} />
          <AuthRoute path="/dibs" component={DibsPage} />
          <AuthRoute
            path="/projects/:status/:userId"
            component={ProjectStatusPage}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
