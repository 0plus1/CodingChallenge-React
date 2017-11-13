/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './../src/routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes />, div);
});
