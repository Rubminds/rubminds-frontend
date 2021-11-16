import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from '../common/theme'
import GlobalStyles from '../common/GlobalStyle'
import LandingPage from './LandingPage'
import WrittingPage from './WrittingPage'
import { Header, ChatButton, Footer } from '../components'
import LogInPage from './LogInPage'
import SignUpPage from './SignUpPage'



const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <ChatButton />
        <Switch>
          <Route
            path="/callback/:accessToken/:signupCheck"
            component={SignUpPage}
          />
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/write" component={WrittingPage} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
