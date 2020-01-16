import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Homepage from './views/Home';
import Book from './views/Book';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/:testRouting?" component={Homepage} />
      <Route exact path='/book/:id' render={props => {
          return <Book props={props}/>;
       }} />
    </Switch>
  </Router>
);

export default Routes;
