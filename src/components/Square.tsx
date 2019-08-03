import React, { useState, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { ALL, GameStatus } from '../constants';
import { IGrid, ISquare } from '../types';
import { getSafeNeighbors } from '../utils/helpers';

import Icon from './Icon';

type Props = {
  grid: IGrid;
  openSquares: string[];
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
  square: ISquare;
};

const Square = ({
  grid,
  openSquares,
  setOpenSquares,
  setStatus,
  square
}: Props) => {
  const [isFlagged, setIsFlagged] = useState(square.isFlagged);
  const [isLosingMiine, setIsLosingMine] = useState(false);

  const isOpen = openSquares.includes(ALL) || openSquares.includes(square.id);

  const getNumbeOfNeighbors = (neighbors: number) => {
    const digitsAsWords = ['one', 'two', 'three', 'four'];
    return digitsAsWords[neighbors - 1];
  };

  const squareDisplay = () => {
    if (!isOpen && !isFlagged) {
      return null;
    } else if (isFlagged) {
      return <Icon name="flag-checkered" />;
    } else if (square.hasMine) {
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
      setOpenSquares([...openSquares, square.id]);

      if (square.hasMine) {
        console.warn('GAME OVER!');
        setIsLosingMine(true);
        setStatus(GameStatus.LOST);
        setOpenSquares([ALL]);
      } else if (square.neighborsWithMines === 0) {
        const safeNeighbors = getSafeNeighbors(square, grid);
        setOpenSquares([...openSquares, square.id, ...safeNeighbors]);
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
