import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 375px;
  height: 350px;
  right: -20%;
  top: 46px;
  background: white;
  box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), 0.0975);
  border-radius: 6px;
  &::after {
    content: "";
    height: 0px;
    width: 0px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -10px;
    border-right: solid 10px transparent;
    border-left: solid 10px transparent;
    filter: drop-shadow(0 -0.8px 1px rgba(var(--jb7, 0, 0, 0), 0.0975));
    border-bottom: solid 10px white;
  }
`;

export const UsersWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  width: 100%;
  display: ${(props) => (props.showText ? "flex" : "block")};
  justify-content: center;
  align-items: center;
`;

export const UserWrapperLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

export const SearchText = styled.span`
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;
