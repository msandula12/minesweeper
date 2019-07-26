import React, { useState, SyntheticEvent } from 'react';

import { ISquare } from '../types/general';

type Props = {
  square: ISquare;
};

const Square = ({ square }: Props) => {
  const [isOpen, setIsOpen] = useState(square.isOpen);
  const [isFlagged, setIsFlagged] = useState(square.isFlagged);

  const getNumbeOfNeighbors = (neighbors: number) => {
    const digitsAsWords = ['one', 'two', 'three', 'four'];
    return digitsAsWords[neighbors - 1];
  };

  const squareDisplay = () => {
    if (!isOpen && !isFlagged) {
      return null;
    } else if (isFlagged) {
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
    if (!isOpen && !isFlagged) {
      setIsOpen(true);
    }
  };

  const toggleFlagged = (e: SyntheticEvent) => {
    e.preventDefault();
    e.persist();
    if (!isOpen) {
      setIsFlagged(!isFlagged);
    }
  };

  const squareCls = `square ${!isOpen || isFlagged ? 'shut' : 'open'}`;
  return (
    <div
      onClick={openSquare}
      onContextMenu={toggleFlagged}
      className={squareCls}
    >
      {squareDisplay()}
    </div>
  );
};

export default Square;
