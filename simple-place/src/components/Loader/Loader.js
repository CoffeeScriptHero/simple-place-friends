import React from "react";
import { Wrapper, CircleLoader, PostsLoader } from "./Loader-styles";

const Loader = ({ postsLoader = false }) => {
  return (
    <Wrapper>
      {!postsLoader && <CircleLoader></CircleLoader>}
      {postsLoader && <PostsLoader></PostsLoader>}
    </Wrapper>
  );
};

export default Loader;
