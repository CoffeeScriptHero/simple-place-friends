import React from "react";
import { Frame } from "./GameFrame-styles";

const GameFrame = ({ url }) => {
  return (
    <iframe
      src={url}
      style={{ width: "100%", height: "100%" }}
      frameBorder="0"
      allow="gamepad *;"
    ></iframe>
  );
};

export default GameFrame;
