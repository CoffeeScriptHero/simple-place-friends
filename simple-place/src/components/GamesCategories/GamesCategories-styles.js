import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

export const Wrapper = styled.div`
  width: 170px;
  height: 600px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const CategoriesTitle = styled.h2`
  text-align: center;
  font-family: "Lubalin Graph";
`;

export const CategoriesList = styled.ul`
  padding: 0;
  list-style-type: none;
  text-decoration: none;
`;

export const CategoryIcon = styled(Icon)``;

export const CategoryName = styled.span`
  transition: all 0.2s;
  z-index: -1;
  margin-left: 5px;
`;

export const CategoryLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 20px;
  color: #000;
  transition: all 0.1ss;
  &:hover ${CategoryName} {
    margin-left: 15px;
  }
`;

export const CategoryItem = styled.li`
  position: relative;
  cursor: pointer;
  font-family: "Lubalin Graph";
  &:not(:nth-last-of-type(1)) {
    padding-bottom: 10px;
  }
  ${CategoryIcon} {
    fill: ${(props) => (props.isChosen ? "#5551ff" : "#000")};
  }
  ${CategoryName} {
    color: ${(props) => (props.isChosen ? "#5551ff" : "#000")};
  }
  ${CategoryLink}:hover {
    &::before {
      content: "";
      display: ${(props) => (props.isChosen ? "none" : "block")};
      position: absolute;
      height: 30px;
      width: 150px;
      background: transparent;
      border: 2px solid #000;
      right: 10px;
    }
    // &::before {
    //   content: "";
    //   display: ${(props) => (props.isChosen ? "none" : "block")};
    //   position: absolute;
    //   height: 30px;
    //   width: 170px;
    //   background: transparent;
    //   border-top: 2px solid #000;
    //   border-bottom: 2px solid #000;
    //   right: 0.5px;
    // }
  }
  &::before {
    content: "";
    position: absolute;
    display: ${(props) => (props.isChosen ? "block" : "none")};
    height: 25px;
    width: 8px;
    background: #5551ff;
  }
`;
