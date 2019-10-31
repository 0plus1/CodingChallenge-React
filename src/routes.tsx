import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import BooksContainer from './container/BooksContainer';
import BookContainer from "./container/BookContainer";

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <>
    <Switch>
      <Route exact path="/" component={BooksContainer} />
      <Route path="/book/:id" component={BookContainer} />
    </Switch>
    </>
  </Router>
);

export default Routes;
