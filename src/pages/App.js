import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from '../common/theme'
import GlobalStyles from '../common/GlobalStyle'
import LandingPage from './LandingPage'
import WrittingPage from './WrittingPage'
import { Header, ChatButton, Footer } from '../components'
import LogInPage from './LogInPage'

const App = () => {
 

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <ChatButton />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/write" component={WrittingPage} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
