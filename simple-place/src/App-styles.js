import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppWrapper = styled.div`
  overflow: hidden;
`;

export const MainContainer = styled.div`
  width: 975px;
  margin: 0 auto;
`;

export const LinkMessage = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.height || "30px"};
`;

export const Logo = styled(LinkMessage)`
  margin: 0;
  font-size: ${(props) => props.fontSize || "20px"};
  user-select: none;
  pointer-events: ${(props) => props.pointerEvents || "auto"};
  color: black;
  font-family: Quicksand;
  font-weight: bold;
`;

export const SubscribeButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #5551ff;
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
