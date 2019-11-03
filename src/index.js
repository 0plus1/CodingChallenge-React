/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from 'containers/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import 'sanitize.css';
import './global.css';

const store = configureStore();

ReactDOM.render(
  // TODO use jsx extension for this file, will require to eject the create-react-app
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
