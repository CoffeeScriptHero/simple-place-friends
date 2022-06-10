import React from "react";
import { Wrapper, Name, NameLink } from "./Username-styles";

const Username = ({ username, isLink = true, ...rest }) => {
  return (
    <Wrapper>
      {isLink && (
        <NameLink {...rest} to={`/${username}`}>
          {username}
        </NameLink>
      )}
      {!isLink && <Name {...rest}>{username}</Name>}
    </Wrapper>
  );
};

export default Username;
