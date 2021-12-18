import React from "react";

//Style
import { StartButtonStyle } from "./styles/StartButton.style";

export default function StartButton({ callback }) {
  return <StartButtonStyle onClick={callback}>Start Game</StartButtonStyle>;
}
