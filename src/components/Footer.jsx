import React from 'react';
import styled from 'styled-components';
import COLOR from '../shared/color';

const FooterContainer = styled.div`
  width:100%;
  height:50px;
  background-color:${COLOR.darkBlue};
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  line-height:50px;
  color: white;
  padding-right:30px;
  font-size:0.8em;
  text-align:right;
  font-style:italic;
`;

const Layout = () => (
  <FooterContainer data-test="footerComponent">
    <FooterText>Created by Yijie Shen (Neal)</FooterText>
  </FooterContainer>
);

export default Layout;
