import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GamesCategories, {
  categories,
} from "../../components/GamesCategories/GamesCategories";
import { getGames } from "../../services/GamesService";
import {
  Container,
  GamesTitle,
  GamesWrapper,
  GamePreviewLink,
  GamePreviewImg,
} from "./GamesPage-styles";

const GamesPage = () => {
  const { category } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (categories.includes(category)) {
      getGames(category)
        .then((res) => res.json())
        .then((res) => setGames(res.games));
    }
  }, [category]);

  const gamesList = games.map((g) => (
    <GamePreviewLink to={`/games/g/${g.name}`} key={g.id}>
      <GamePreviewImg src={g.img}></GamePreviewImg>
    </GamePreviewLink>
  ));

  return (
    <Container>
      <GamesWrapper>
        <GamesTitle>Games</GamesTitle>
        {gamesList}
      </GamesWrapper>
      <GamesCategories currentCategory={category} />
    </Container>
  );
};

export default GamesPage;
