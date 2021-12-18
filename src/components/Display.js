import React from "react";

//Style
import { DisplayStyle } from "./styles/Display.style";

export default function Display({ gameOver, text }) {
  return <DisplayStyle>{text}</DisplayStyle>;
}
