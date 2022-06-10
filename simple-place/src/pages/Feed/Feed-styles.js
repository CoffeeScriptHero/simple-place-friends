import styled from "styled-components";
import { MainContainer } from "../../App-styles";

export const Section = styled.section``;

export const Main = styled.main`
  background: red;
`;

export const FeedContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  z-index: 0;
`;
