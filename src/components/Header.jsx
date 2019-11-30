import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width:100%;
  height:50px;
  background-color:red;
`;

const Layout = () => (
  <HeaderContainer data-test="headerComponent">
        HEADER
  </HeaderContainer>
);

export default Layout;
