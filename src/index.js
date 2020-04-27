import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import productListApp from './reducers';

import './index.css';
import 'sanitize.css';

import Routes from './routes';

// eslint-disable-next-line max-len
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(productListApp, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
ReactDOM.render(
  // TODO use jsx extension for this file, will require to eject the create-react-app
  // eslint-disable-next-line react/jsx-filename-extension
  <Routes store={store} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
