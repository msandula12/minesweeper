import React from 'react';

import { ISquare } from '../types/square';

type Props = {
  square: ISquare;
};

const Square = ({ square }: Props) => {
  const getNumbeOfNeighbors = (neighbors: number) => {
    const digitsAsWords = ['one', 'two', 'three', 'four'];
    return digitsAsWords[neighbors - 1];
  };

  const squareDisplay = () => {
    if (square.isMine) {
      return (
        <span>
          <i className="fas fa-bomb" />
        </span>
      );
    } else if (square.neighborsWithMines) {
      const neighborsCls = `neighbors ${getNumbeOfNeighbors(
        square.neighborsWithMines
      )}-neighbors`;
      return <span className={neighborsCls}>{square.neighborsWithMines}</span>;
    } else {
      return null;
    }
  };

  const squareCls = `square ${square.isOpen ? 'open' : 'shut'}`;
  return <div className={squareCls}>{square.isOpen && squareDisplay()}</div>;
};

export default Square;
