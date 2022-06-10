import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const CircleLoader = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  margin: -25px 0 0 -25px;
  border: 4px solid rgba(0, 0, 0, 0.25);
  border-top: 4px black solid;
  border-right: 4px black solid;
  border-bottom: 4px black solid;
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
`;

export const PostsLoader = styled(CircleLoader)`
  display: inline-block;
  position: static;
  margin: 30px;
`;
