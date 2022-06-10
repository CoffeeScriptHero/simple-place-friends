import styled from "styled-components";
import { Link } from "react-router-dom";

export const Svg = styled.span`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  position: ${(props) => props.position || "static"};
  z-index: ${(props) => props.zIndex || "0"};
  top: ${(props) => props.top || "0"};
  right: ${(props) => props.right || "0"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
`;

export const IconLink = styled(Link)`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  z-index: 0;
`;
