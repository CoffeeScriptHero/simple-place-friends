import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #e7e7e7;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 0 10px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  margin: 0;
  font-size: ${(props) => props.fontSize || "20px"};
  color: black;
  font-family: Quicksand;
  font-weight: bold;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  user-select: none;
  text-decoration: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 155px;
`;
