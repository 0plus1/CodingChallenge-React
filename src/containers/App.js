import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import Book from './Book';
import BookItem from './BookItem';

const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect to="/book" />
      )}
    />
    <Route exact path="/book" component={Book} />
    <Route path="/book/:id" component={BookItem} />
  </Switch>
);

Route.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default withRouter(App);
