import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../common/theme'
import GlobalStyles from '../common/GlobalStyle'
import LandingPage from './LandingPage'
import WrittingPage from './WrittingPage'
import PostDetailPage from './PostDetailPage'
import LogInPage from './LogInPage'
import LogInProcess from './LogInProcess'
import SignUpPage from './SignUpPage'
import MyPage from './MyPage'
import DibsPage from './DibsPage'
import ProjectStatusPage from './ProjectStatusPage'

import { Header, ChatButton } from '../components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <ChatButton />
        <Switch>
          <Route
            exact path="/callback/:id/:nickname/:accessToken/:signupCheck/:avatar1/:avatar2?/:avatar3?"
            component={LogInProcess}
          />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/post/:id" component={PostDetailPage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/write" component={WrittingPage} />
          <Route path="/mypage/:id" component={MyPage} />
          <Route path="/dibs" component={DibsPage} />
          <Route path="/projects/:type" component={ProjectStatusPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
