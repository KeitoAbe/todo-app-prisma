import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        key={i}
      />
    );
  };

  return (
    <div>
      {Array(3)
        .fill(0)
        .map((row, i) => {
          return (
            <div className="board-row" key={i}>
              {Array(3)
                .fill(0)
                .map((col, j) => {
                  return renderSquare(i * 3 + j);
                })}
            </div>
          );
        })}
    </div>
  );
}

function Game(props) {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [isAsc, setIsAsc] = useState(true);

  const handleClick = (i) => {
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

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleOrder = () => {
    setIsAsc(!isAsc);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

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
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
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
      return squares[a];
    }
  }
  return null;
}
