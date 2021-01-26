import React from 'react'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import { HomePage, HeroPage } from 'pages'
import { HeroPageContextProvider } from 'pages/HeroPage/_context'

export const Routes = () => (
  <Router basename='/marvel'>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <HeroPageContextProvider>
        <Route path='/hero/:heroId' component={HeroPage} />
      </HeroPageContextProvider>
    </Switch>
  </Router>
)
