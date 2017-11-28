import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './views/home';
import BookView from './views/book';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/book/:id" component={BookView} />
    </div>
  </Router>
);

export default Routes;
