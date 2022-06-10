import React from "react";
import { Wrapper, LikesText } from "./LikesSection-styles";

const LikesSection = ({ likes, id, handler, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {likes.length === 0 && (
        <LikesText {...rest}>
          Be the first to{" "}
          <LikesText bold inline>
            like it
          </LikesText>
        </LikesText>
      )}
      {likes.length > 0 && (
        <LikesText {...rest} bold pointer onClick={handler.bind(this, id)}>
          {likes.length} liked
        </LikesText>
      )}
    </Wrapper>
  );
};

export default LikesSection;
