import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../common/theme';
import GlobalStyles from '../common/GlobalStyle';
import LandingPage from './LandingPage';
import PostDetailPage from './PostDetailPage'
import {Header, ChatButton} from '../components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header/>
        <ChatButton/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/detail" component={PostDetailPage} />
        </Switch>
        
      </Router>
    </ThemeProvider>
  );
};

export default App;
