/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookList from './components/product-list/Book-List';
import BookDetail from './components/product-detail/Book-Detail';

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={BookList} />
      <Route exact path="/books" component={BookList} />
      <Route exact path="/books/:id?" component={BookDetail} />
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
