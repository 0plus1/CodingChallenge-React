import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const BodyContainer = styled.div`
  width:100%;
  height:calc(100vh - 100px);
`;


const Layout = WrappedComponent => class extends React.PureComponent {
  render() {
    return (
      <div data-test="layoutComponent">
        <Header />
        <BodyContainer>
          <WrappedComponent {...this.props} />
        </BodyContainer>
        <Footer />
      </div>
    );
  }
};

export default Layout;
