import React, { useState, SyntheticEvent } from 'react';
import classNames from 'classnames';
import { uniq } from 'lodash';

import { ALL, GameStatus } from '../constants';
import { IGameConfiguration, IGame, ISquare } from '../types';
import {
  getSafeNeighbors,
  getSquaresWithMines,
  hasWonGame
} from '../utils/helpers';

import Icon from './Icon';

type Props = {
  config: IGameConfiguration;
  flaggedSquares: string[];
  game: IGame;
  openSquares: string[];
  setFlaggedSquares: (ids: string[]) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
  square: ISquare;
};

const Square = ({
  config,
  flaggedSquares,
  game,
  openSquares,
  setFlaggedSquares,
  setOpenSquares,
  setStatus,
  square
}: Props) => {
  const [isLosingMiine, setIsLosingMine] = useState(false);

  const { grid, status } = game;

  const gameIsOver = status !== GameStatus.IN_PROGRESS;
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
        setIsLosingMine(true);
        setStatus(GameStatus.LOST);
        setOpenSquares([ALL]);
        return;
      }

      const safeNeighbors =
        square.neighborsWithMines === 0
          ? getSafeNeighbors(square, grid, flaggedSquares, openSquares)
          : [];

      const newOpenSquares = uniq([
        ...openSquares,
        square.id,
        ...safeNeighbors
      ]);
      setOpenSquares(newOpenSquares);

      if (hasWonGame(config, flaggedSquares, newOpenSquares)) {
        const squaresWithMine = getSquaresWithMines(grid);
        setFlaggedSquares(squaresWithMine);
        setStatus(GameStatus.WON);
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
      disabled: gameIsOver,
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
