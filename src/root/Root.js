import React from 'react'
import App from '../App'
import Recipe from '../Recipe/Recipe'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:id" component={Recipe} exact />
        </Switch>
    </Router>
  )
}

export default Root
