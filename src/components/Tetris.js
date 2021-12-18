import React from "react";

import { createStage } from "../gameHelpers";

import { randomTetromino } from "../tetrominus";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

export default function Tetris() {
  console.log(randomTetromino());

  return (
    <div className="tetris">
      <Stage stage={createStage()} />
      <aside>
        <Display text={"Score"} />
        <Display text={"Rows"} />
        <Display text={"Level"} />
      </aside>
      <StartButton />
    </div>
  );
}
