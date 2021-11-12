import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../common/theme';
import GlobalStyles from '../common/GlobalStyle';
import LandingPage from './LandingPage';
import {Header} from '../components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
