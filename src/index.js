import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'sanitize.css';

import Routes from './routes';

ReactDOM.render(
  // TODO use jsx extension for this file, will require to eject the create-react-app
  // eslint-disable-next-line react/jsx-filename-extension
  <Routes />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
