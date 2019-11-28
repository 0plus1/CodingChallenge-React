import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

const Layout = WrappedComponent => class extends React.PureComponent {
  render() {
    return (
        <Container id="body" maxWidth="lg">
          <WrappedComponent {...this.props} />
        </Container>
    );
  }
};

Layout.proptypes = {
  children: PropTypes.required,
};

export default Layout;
