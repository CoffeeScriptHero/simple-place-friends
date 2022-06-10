import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${(props) => (props.isComment ? "inline-flex " : "flex")};
  flex: ${(props) => props.flex || "0"};
  padding: ${(props) => props.padding || "0"};
  align-items: center;
  pointer-events: ${(props) => (props.disableClick ? "none" : "auto")};
  &:active {
    background: ${(props) => props.activeBackground || "none"};
  }
`;
