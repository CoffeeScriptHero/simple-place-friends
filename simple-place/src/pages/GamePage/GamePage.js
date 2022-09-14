import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getGameInfo } from "../../services/GamesService";
import { Container, GameTitle } from "./GamePage-styles";

const GamePage = () => {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGameInfo(name)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <GameTitle>{name}</GameTitle>
    </Container>
  );
};

export default GamePage;
