import styled from "styled-components";
import { MainContainer } from "../../App-styles";
import { Link } from "react-router-dom";

export const Container = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  padding-top: 75px;
`;

export const GamesTitle = styled.h1`
  margin-top: 0;
  text-align: center;
  font-family: "Lubalin Graph";
  text-transform: uppercase;
`;

export const GamesWrapper = styled.div`
  width: 800px;
`;

export const GamePreviewLink = styled(Link)`
  display: inline-block;
  &:not(:nth-of-type(4n)) {
    margin-right: 20px;
  }
  margin-bottom: 20px;
`;

export const GamePreviewImg = styled.img`
  box-sizing: border-box;
  width: 178px;
  height: 100px;
  border: 2px solid transparent;
  border-radius: 10px;
`;

export const Section = styled.section``;
