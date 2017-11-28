import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import store from './store';

import Home from './views/home';
import BookView from './views/book';

const Routes = (store) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/book/:id" component={BookView} />
      </div>
    </Router>
  </Provider>
);

export default Routes;
