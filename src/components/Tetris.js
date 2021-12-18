import React, { useState } from "react";

//Function
import { randomTetromino } from "../tetrominos";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

//Style
import { TetrisWrapperStyle, TetrisStyle } from "./styles/Tetris.style";

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");
  console.log(player);
  return (
    <TetrisWrapperStyle>
      <TetrisStyle>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"} />
          ) : (
            <div>
              <Display text={"Score"} />
              <Display text={"Rows"} />
              <Display text={"Level"} />
            </div>
          )}

          <StartButton />
        </aside>
      </TetrisStyle>
    </TetrisWrapperStyle>
  );
}
