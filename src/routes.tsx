import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import BooksContainer from './container/BooksContainer';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/:testRouting?" component={BooksContainer} />
    </Switch>
  </Router>
);

export default Routes;
