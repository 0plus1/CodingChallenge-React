import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './views/Home';
import Single from './views/Single';





const Routes = () => (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book/:id" component={Single} />
      </Switch>
    </Router>
);

export default Routes;
