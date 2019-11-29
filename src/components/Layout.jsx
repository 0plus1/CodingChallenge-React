import React from 'react';
import PropTypes from 'prop-types';
import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const StyledContainer = styled(Container)`
  margin-top: 2em;
`;

const Layout = WrappedComponent => class extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Book Finder
            </Typography>
            <Button color="inherit"><StyledLink to={'/'}>Home</StyledLink></Button>
          </Toolbar>
        </AppBar>
        <StyledContainer id="body" maxWidth="lg">
          <WrappedComponent {...this.props} />
        </StyledContainer>
      </React.Fragment>
    );
  }
};

Layout.proptypes = {
  children: PropTypes.required,
};

export default Layout;
