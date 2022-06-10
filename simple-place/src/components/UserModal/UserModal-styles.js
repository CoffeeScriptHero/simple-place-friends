import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const UsernameWrapper = styled.div`
  flex: 3;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: Quicksand;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  border-radius: 3px;
  padding: 3px 0;
  max-width: 90px;
  flex: 1;
`;
