/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import 'sanitize.css';
import './css/reset.scss';

import Routes from './routes';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
// mount it on the Store
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares),
  ),
);

// then run the saga
sagaMiddleware.run(saga);


// render the application
ReactDOM.render(
  // TODO use jsx extension for this file, will require to eject the create-react-app
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
