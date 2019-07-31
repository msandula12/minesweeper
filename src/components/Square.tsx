import React, { useState, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { IGame } from '../types/general';

import Icon from './Icon';

type Props = {
  game: IGame;
  rowIndex: number;
  sqIndex: number;
};

const Square = ({ game, rowIndex, sqIndex }: Props) => {
  const square = game.grid[rowIndex][sqIndex];
  const [isOpen, setIsOpen] = useState(square.isOpen);
  const [isFlagged, setIsFlagged] = useState(square.isFlagged);
  const [isLosingMiine, setIsLosingMine] = useState(false);

  const getNumbeOfNeighbors = (neighbors: number) => {
    const digitsAsWords = ['one', 'two', 'three', 'four'];
    return digitsAsWords[neighbors - 1];
  };

  const squareDisplay = () => {
    if (!isOpen && !isFlagged) {
      return null;
    } else if (isFlagged) {
      return <Icon name="flag-checkered" />;
    } else if (square.isMine) {
      return <Icon name="bomb" />;
    } else if (square.neighborsWithMines) {
      const numOfNeighbors = getNumbeOfNeighbors(square.neighborsWithMines);
      const neighborsCls = `neighbors ${numOfNeighbors}-neighbors`;
      return <span className={neighborsCls}>{square.neighborsWithMines}</span>;
    } else {
      return null;
    }
  };

  const openSquare = () => {
    if (!isOpen && !isFlagged) {
      setIsOpen(true);

      if (square.isMine) {
        console.warn('GAME OVER!');
        setIsLosingMine(true);
      }
    }
  };

  const toggleFlagged = (e: SyntheticEvent) => {
    e.preventDefault();
    e.persist();
    if (!isOpen) {
      setIsFlagged(!isFlagged);
    }
  };

  const squareCls = classNames(
    'square',
    'flex-row',
    'align-center',
    'justify-center',
    {
      exploded: isLosingMiine,
      open: isOpen,
      shut: !isOpen || isFlagged
    }
  );

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
