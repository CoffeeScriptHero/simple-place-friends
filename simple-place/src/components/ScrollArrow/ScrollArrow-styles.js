import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

export const Wrapper = styled.div`
  display: ${(props) => (props.showScroll ? "flex" : "none")};
  position: fixed;
  bottom: 40px;
  left: 30px;
  align-items: center;
  height: 20px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
