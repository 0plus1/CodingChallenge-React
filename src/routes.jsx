import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Home';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/:testRouting?" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
