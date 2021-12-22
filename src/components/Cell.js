import React from "react";
import StyledCell from "./styles/Cell.style";
import { TETROMINOS } from "../tetrominos";

function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
}

export default React.memo(Cell);
