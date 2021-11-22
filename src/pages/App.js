import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../common/theme';
import GlobalStyles from '../common/GlobalStyle';
import LandingPage from './LandingPage';
import WrittingPage from './WrittingPage';
import PostDetailPage from './PostDetailPage';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';

import { Header, ChatButton } from '../components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <ChatButton />
        <Switch>
          <Route path="/callback/:accessToken/:signupCheck" component={SignUpPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/detail" component={PostDetailPage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/write" component={WrittingPage} />
          <Route path="/mypage" component={WrittingPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;