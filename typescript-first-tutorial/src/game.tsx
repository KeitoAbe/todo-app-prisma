import { SetStateAction, useState } from "react";
import { Board } from "./board";
import style from "./game.module.css"

type History = {
  squares: (string|null)[];
  col?: number;
  row?: number;
}

export function Game() {
  const [history, setHistory] = useState<History[]>([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [isAsc, setIsAsc] = useState(true);

  const handleClick = (i: number) => {
    const copiedHistory = history.slice(0, stepNumber + 1);
    const current = copiedHistory[copiedHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      copiedHistory.concat([
        {
          squares: squares,
          col: (i % 3) + 1,
          row: Math.floor(i / 3) + 1,
        },
      ])
    );
    setStepNumber(copiedHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleOrder = () => {
    setIsAsc(!isAsc);
  };

  const current = history[stepNumber];
  const winnerInfo = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move}(col: ${step.col}, row: ${step.row})`
      : `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {move === stepNumber ? <strong>{desc}</strong> : desc}
        </button>
      </li>
    );
  });
  let status;
  let winLine: number[] = [];
  if (winnerInfo === "draw") {
    status = `Draw`;
  } else if (winnerInfo !== null) {
    status = `Winner: ${winnerInfo.player}`;
    winLine = winnerInfo.line;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }
  
  return (
    <div className={style.game}>
      <div className={style.game_board}>
        <Board
          squares ={current.squares}
          onClick ={(i) => handleClick(i)}
          winLine={winLine}
        />
      </div>
      <div className={style.game_info}>
        <div>{status}</div>
        <div>
          <button onClick={() => handleOrder()}>
            {isAsc ? `To DES` : `To ASC`}
          </button>
        </div>
        <ol>{isAsc ? moves : moves.reverse()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  if (!squares.includes(null)) {
    return "draw";
  }
  return null;
}
