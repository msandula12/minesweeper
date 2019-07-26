import React, { useState } from 'react';

import { ISquare } from '../types/square';

type Props = {
  square: ISquare;
};

const Square = ({ square }: Props) => {
  const [isOpen, setIsOpen] = useState(square.isOpen);

  const getNumbeOfNeighbors = (neighbors: number) => {
    const digitsAsWords = ['one', 'two', 'three', 'four'];
    return digitsAsWords[neighbors - 1];
  };

  const squareDisplay = () => {
    if (square.isFlagged) {
      return <i className="fas fa-flag-checkered square-flag" />;
    } else if (square.isMine) {
      return <i className="fas fa-bomb" />;
    } else if (square.neighborsWithMines) {
      const neighborsCls = `neighbors ${getNumbeOfNeighbors(
        square.neighborsWithMines
      )}-neighbors`;
      return <span className={neighborsCls}>{square.neighborsWithMines}</span>;
    } else {
      return null;
    }
  };

  const openSquare = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const squareCls = `square ${!isOpen || square.isFlagged ? 'shut' : 'open'}`;
  return (
    <div onClick={() => openSquare()} className={squareCls}>
      {isOpen && squareDisplay()}
    </div>
  );
};

export default Square;
