import React, { useState } from "react";

//Function
import { checkCollision, createStage } from "../gameHelpers";
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

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset everything
    setGameOver(false);
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // GameOver
      if (player.pos.y < 1) {
        console.log("Game Over !");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <TetrisWrapperStyle role="button" tabIndex={0} onKeyDown={(e) => move(e)}>
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

          <StartButton callback={startGame} />
        </aside>
      </TetrisStyle>
    </TetrisWrapperStyle>
  );
}
