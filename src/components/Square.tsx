import React, { useState, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { GameStatus, IGame, IGrid } from '../types/general';
import { getSafeNeighbors } from '../util/helpers';

import Icon from './Icon';

type Props = {
  game: IGame;
  openSquares: string[];
  rowIndex: number;
  setStatus: (status: GameStatus) => unknown;
  sqIndex: number;
  updateGrid: (grid: IGrid) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
};

const Square = ({
  game,
  openSquares,
  rowIndex,
  setStatus,
  sqIndex,
  setOpenSquares
}: Props) => {
  const square = game.grid[rowIndex][sqIndex];

  const [isFlagged, setIsFlagged] = useState(square.isFlagged);
  const [isLosingMiine, setIsLosingMine] = useState(false);

  const isOpen = openSquares.includes(square.id);

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
      // setIsOpen(true);
      setOpenSquares([...openSquares, square.id]);

      if (square.hasMine) {
        console.warn('GAME OVER!');
        setIsLosingMine(true);
        setStatus(GameStatus.LOST);
      } else if (square.neighborsWithMines === 0) {
        const safeNeighbors = getSafeNeighbors(square, game.grid);
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
