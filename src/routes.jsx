import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './containers/App';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
