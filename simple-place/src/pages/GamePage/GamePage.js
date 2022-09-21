import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameFrame from "../../components/GameFrame/GameFrame";
import Loader from "../../components/Loader/Loader";
import { getGameInfo } from "../../services/GamesService";
import { Container, GameTitle } from "./GamePage-styles";

const GamePage = () => {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    getGameInfo(name)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setGameData(data.game);
      });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <GameFrame url={gameData.url} />
    </Container>
  );
};

export default GamePage;
