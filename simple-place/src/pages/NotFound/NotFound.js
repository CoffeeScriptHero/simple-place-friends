import React from "react";
import { Wrapper, Title, Message, MainPageLink } from "./NotFound-styles";

const NotFound = () => {
  return (
    <Wrapper>
      <Title>Sorry, this page is not available.</Title>
      <Message>
        The link you followed may be broken or the page may not exist.{" "}
        <MainPageLink to="/">Back to SimplePlace.</MainPageLink>
      </Message>
    </Wrapper>
  );
};

export default NotFound;
