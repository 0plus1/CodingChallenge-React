import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width:100%;
  height:50px;
  background-color:red;
`;

const Layout = () => (
  <FooterContainer data-test="footerComponent">
        FOOTER
  </FooterContainer>
);

export default Layout;
