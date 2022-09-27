import React from "react";
import { Square } from "./square";
import style from "./board.module.css";

type Props = {
  onClick: (i: number) => void;
  winLine: number[];
  squares: (string | null)[];
};

export function Board(props: Props){
  const renderSquare = (i: number) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        isHighlight={props.winLine.includes(i)}
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
            <div className={style.board_row} key={i}>
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
};
