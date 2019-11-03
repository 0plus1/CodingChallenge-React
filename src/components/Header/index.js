/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { APP_NAME } from 'utils/constants';

function Header({ name }) {
  return (
    <nav>
      <h1>{APP_NAME}</h1>
      <h1>{name}</h1>
    </nav>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: null,
};

export default Header;
