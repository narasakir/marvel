import React from 'react'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import { HomePage, HeroPage } from 'pages'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hero/:heroId' component={HeroPage} />
    </Switch>
  </Router>
)
