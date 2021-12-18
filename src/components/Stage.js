import React from "react";

//Style
import { StageStyle } from "./styles/Stage.style";

//Components
import Cell from "./Cell";

export default function Stage({ stage }) {
  return (
    <StageStyle width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, i) => <Cell key={i} type={cell[0]} />)
      )}
    </StageStyle>
  );
}
