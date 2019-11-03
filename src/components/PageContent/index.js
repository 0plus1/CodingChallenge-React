/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function PageContent({ children }) {
  return (
    <div className="px-4">
      {children}
    </div>
  );
}

PageContent.propTypes = {
  children: PropTypes.node,
};

PageContent.defaultProps = {
  children: null,
};

export default PageContent;
