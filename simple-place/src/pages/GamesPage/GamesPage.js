import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GamesCategories, {
  categories,
} from "../../components/GamesCategories/GamesCategories";
import { getGames } from "../../services/GamesService";
import Loader from "../../components/Loader/Loader";
import NotFound from "../NotFound/NotFound";
import {
  Container,
  GamesTitle,
  GamesWrapper,
  GamePreviewLink,
  GamePreviewImg,
} from "./GamesPage-styles";

const GamesPage = () => {
  const { category } = useParams();
  const [pageLoading, setPageLoading] = useState(true);
  const [gamesLoading, setGamesLoading] = useState(true);
  const [categoryExist, setCategoryExist] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (categories.includes(category)) {
      setGamesLoading(true);
      getGames(category)
        .then((res) => res.json())
        .then((res) => {
          setGamesLoading(false);
          setCategoryExist(true);
          setGames(res.games);
          setPageLoading(false);
        });
    } else {
      setCategoryExist(false);
      setPageLoading(false);
    }
  }, [category]);

  if (!pageLoading && !categoryExist) return <NotFound />;

  const gamesList = games.map((g) => (
    <GamePreviewLink to={`/games/g/${g.name}`} key={g.id}>
      <GamePreviewImg src={g.img}></GamePreviewImg>
    </GamePreviewLink>
  ));

  if (pageLoading) return <Loader />;

  return (
    <Container>
      {<GamesCategories currentCategory={category} />}
      <GamesWrapper>
        <GamesTitle>Games</GamesTitle>
        {gamesLoading && <Loader />}
        {games.length > 0 && !gamesLoading && gamesList}
        {games.length === 0 && !gamesLoading && <p>No games</p>}
      </GamesWrapper>
    </Container>
  );
};

export default GamesPage;
