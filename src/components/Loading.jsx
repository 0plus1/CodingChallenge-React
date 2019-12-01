import React from 'react';
import styled, { keyframes } from 'styled-components';
import COLOR from '../shared/color';

const spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
    position: absolute;
    left: 47%;
    top: 45%;
    border: 6px solid lightblue;
    border-radius: 50%;
    border-top: 6px solid ${COLOR.darkBlue};
    width: 100px;
    height: 100px;
    -webkit-animation: ${spin} 2s linear infinite;
    animation: ${spin} 2s linear infinite;
`;

const LoaderContainer = styled.div`
    width:100%;
    height:100%;
    background-color:white;
`;

const Loading = () => (
  <LoaderContainer data-test="loadingComponent">
    <Loader id="loader" />
  </LoaderContainer>
);

export default Loading;
