import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  padding: ${(props) => props.padding || "0"};
  display: inline-block;
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.src || "#",
  alt: props.src || "undefined",
}))`
  cursor: ${(props) => props.cursor || "default"};
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const UserLink = styled(Link)`
  text-decoration: none;
`;
