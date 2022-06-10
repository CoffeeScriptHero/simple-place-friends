import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: inline-block;
`;

export const NameLink = styled(Link)`
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin: ${(props) => props.margin || "0"};
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: ${(props) => props.decoration || "none"};
  }
`;

export const Name = styled.span`
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin: ${(props) => props.margin || "0"};
  color: black;
`;
