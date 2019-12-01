import React from 'react';
import styled from 'styled-components';
import COLOR from '../shared/color';

const HeaderContainer = styled.div`
  width:100%;
  height:50px;
  background-color:${COLOR.lightBlue};
`;

const HeaderText = styled.p`
  margin: 0;
  padding: 0;
  line-height:50px;
  color: white;
  padding-left:30px;
  font-size:1.2em;
`;

const Layout = () => (
  <HeaderContainer data-test="headerComponent">
    <HeaderText>Coding Challenge</HeaderText>
  </HeaderContainer>
);

export default Layout;
