import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 268px;
  height: 36px;
  z-index: 1;
`;

export const SearchInput = styled.input`
  background: rgba(var(--bb2, 239, 239, 239), 1);
  font-size: 16px;
  border-radius: 8px;
  padding: 3px 16px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  line-height: 18px;
`;

export const PlaceholderWrapper = styled.div`
  pointer-events: none;
  height: 25px;
  position: absolute;
  left: 16px;
  top: 5.5px;
  display: flex;
  align-items: center;
`;

export const PlaceholderText = styled.span`
  margin-left: 12px;
  font-size: 16px;
  color: rgba(var(--f52, 142, 142, 142), 1);
`;
