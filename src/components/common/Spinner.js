import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  position: fixed;
  left: 50%;
  top: 40%;

  z-index: 9999;
  background: transparent;

  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Spinner;
