import React from "react";
import { CategoryIcon, Wrapper } from "./GamesCategories-styles";
import {
  CategoriesTitle,
  CategoriesList,
  CategoryItem,
  CategoryLink,
  CategoryName,
} from "./GamesCategories-styles";

export const categories = [
  "all",
  "action",
  "shooting",
  "adventure",
  "driving",
  "flash",
  ".io",
];

const categoriesIcons = {
  all: "allCategory",
  action: "actionCategory",
  shooting: "shootingCategory",
  adventure: "adventureCategory",
  driving: "drivingCategory",
  flash: "flashCategory",
  ".io": "ioCategory",
};

const GamesCategories = ({ currentCategory = null }) => {
  const categoriesList = categories.map((c) => {
    const name = c[0].toUpperCase() + c.substring(1);
    return (
      <CategoryItem isChosen={currentCategory === c} key={c}>
        <CategoryLink to={`/games/${c}`}>
          <CategoryIcon
            zIndex="-1"
            type={categoriesIcons[c]}
            margin="0 5px 0 0 "
          ></CategoryIcon>
          <CategoryName>{name}</CategoryName>
        </CategoryLink>
      </CategoryItem>
    );
  });

  return (
    <Wrapper>
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesList>{categoriesList}</CategoriesList>
    </Wrapper>
  );
};

export default GamesCategories;
