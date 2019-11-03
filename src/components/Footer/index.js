/* eslint-disable import/no-unresolved, react/jsx-filename-extension */
import React from 'react';
import { APP_DEVELOPER } from 'utils/constants';

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-2">
      <div>{APP_DEVELOPER.name}</div>
      <a href={APP_DEVELOPER.link} title={APP_DEVELOPER.name}>{APP_DEVELOPER.link}</a>
    </footer>
  );
}

export default Footer;
