import React from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

import Home from './views/home';

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </HashRouter>
);

export default Routes;
