import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${(props) => props.padding || "0"};
`;

export const LikesText = styled.span`
  display: inline-block;
  padding: ${(props) => (props.inline ? `0` : `10px 16px`)};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;
