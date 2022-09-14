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
  position: relative;
  width: 775px;
`;

export const GamePreviewLink = styled(Link)`
  box-sizing: border-box;

  display: inline-block;
  width: 178px;
  height: 100px;
  &:not(:nth-of-type(4n)) {
    margin-right: 20px;
  }
  transition: all 0.2s;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #5551ff;
    transform: scale(1.1);
  }
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const GamePreviewImg = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Section = styled.section``;
