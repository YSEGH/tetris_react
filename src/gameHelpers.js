const STAGE_WIDTH = 12;
const STAGE_HEIGHT = 20;

const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

const checkCollision = (player, stage, { x: moveX, moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      //1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        //2. Check that our move is inside the game areas height (y)
        //3. Check that our move is inside the game areas width (x)
        //4. Check that the cell we're moving to isn't set to clear
      }
    }
  }
};

export { STAGE_WIDTH, STAGE_HEIGHT, createStage };
