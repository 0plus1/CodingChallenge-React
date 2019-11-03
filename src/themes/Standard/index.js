/* eslint-disable import/no-unresolved, react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import PageContent from 'components/PageContent';
import Header from 'components/Header';
import Footer from 'components/Footer';

function Standard(WrappedComponent, name) {
  return class extends React.PureComponent {
    render() {
      return (
        <PageContent>
          <Header name={name} />
          <WrappedComponent {...this.props} />
          <Footer />
        </PageContent>
      );
    }
  };
}

Standard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Standard;
