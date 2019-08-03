import React, { useState, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { ALL, GameStatus } from '../constants';
import { IGameConfiguration, IGrid, ISquare } from '../types';
import { getSafeNeighbors, hasWonGame } from '../utils/helpers';

import Icon from './Icon';

type Props = {
  config: IGameConfiguration;
  flaggedSquares: string[];
  grid: IGrid;
  openSquares: string[];
  setFlaggedSquares: (ids: string[]) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
  square: ISquare;
};

const Square = ({
  config,
  flaggedSquares,
  grid,
  openSquares,
  setFlaggedSquares,
  setOpenSquares,
  setStatus,
  square
}: Props) => {
  const [isLosingMiine, setIsLosingMine] = useState(false);

  const isFlagged = flaggedSquares.includes(square.id);
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
      if (square.hasMine) {
        console.warn('GAME OVER!');
        setIsLosingMine(true);
        setStatus(GameStatus.LOST);
        setOpenSquares([ALL]);
        return;
      }

      if (square.neighborsWithMines === 0) {
        const safeNeighbors = getSafeNeighbors(
          square,
          grid,
          flaggedSquares,
          openSquares
        );
        setOpenSquares([...openSquares, square.id, ...safeNeighbors]);
      } else {
        setOpenSquares([...openSquares, square.id]);
      }

      console.log('cells: ', config.rows * config.columns);
      console.log('flaggedSquares: ', flaggedSquares.length);
      console.log('openSquares: ', openSquares.length);
      console.log('mines: ', config.mines);

      console.log(
        'hasWonGame: ',
        hasWonGame(config, flaggedSquares, openSquares)
      );

      if (hasWonGame(config, flaggedSquares, openSquares)) {
        console.warn('YOU WON!');
      }
    }
  };

  const toggleFlagged = (e: SyntheticEvent) => {
    e.preventDefault();
    e.persist();
    if (isOpen) {
      return;
    }
    if (isFlagged) {
      setFlaggedSquares(
        flaggedSquares.filter(flagged => flagged !== square.id)
      );
    } else {
      setFlaggedSquares([...flaggedSquares, square.id]);
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
