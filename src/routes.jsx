import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './containers/Home';
import Book from './containers/Book';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:testRouting?" component={Book} />
    </Switch>
  </Router>
);

export default Routes;
