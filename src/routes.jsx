import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Search from './views/Search';
import Book from './views/Book';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/book/:bookId" component={Book} />
    </Switch>
  </Router>
);

export default Routes;
