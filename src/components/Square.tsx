import React, { useState } from 'react';
import classNames from 'classnames';

import { ALL, GameStatus } from '../constants';
import { IGameConfiguration, IGame, ISquare } from '../types';
import {
  difference,
  getDigitAsString,
  handleRightClick,
  handleKeyboard,
  uniq
} from '../utils/general';
import {
  getSafeNeighbors,
  getSquaresWithMines,
  hasWonGame
} from '../utils/helpers';

import Icon from './Icon';

type Props = {
  config: IGameConfiguration;
  falseFlags: string[];
  flaggedSquares: string[];
  game: IGame;
  makeFirstMove: () => unknown;
  openSquares: string[];
  setFalseFlags: (ids: string[]) => unknown;
  setFlaggedSquares: (ids: string[]) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
  square: ISquare;
};

const Square = ({
  config,
  falseFlags,
  flaggedSquares,
  game,
  makeFirstMove,
  openSquares,
  setFalseFlags,
  setFlaggedSquares,
  setOpenSquares,
  setStatus,
  square
}: Props) => {
  const [isLosingMiine, setIsLosingMine] = useState(false);

  const { grid, status } = game;

  const gameIsOver = status !== GameStatus.IN_PROGRESS;
  const isFalseFlag = falseFlags.includes(square.id);
  const isFlagged = flaggedSquares.includes(square.id);
  const isOpen = openSquares.includes(ALL) || openSquares.includes(square.id);

  const isInitialAction = (): boolean => {
    return flaggedSquares.length === 0 && openSquares.length === 0;
  };

  const openSquare = () => {
    if (isInitialAction()) {
      makeFirstMove();
    }
    if (!isOpen && !isFlagged) {
      if (square.hasMine) {
        setIsLosingMine(true);
        const squaresWithMines = getSquaresWithMines(grid);
        const newFalseFlags = flaggedSquares.filter(
          flagged => !squaresWithMines.includes(flagged)
        );
        setFalseFlags(newFalseFlags);
        setStatus(GameStatus.LOST);
        setOpenSquares([
          ...openSquares,
          ...newFalseFlags,
          ...difference(squaresWithMines, flaggedSquares)
        ]);
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

      if (hasWonGame(config, newOpenSquares)) {
        const squaresWithMines = getSquaresWithMines(grid);
        setFlaggedSquares(squaresWithMines);
        setStatus(GameStatus.WON);
      }
    }
  };

  const toggleFlagged = () => {
    if (isInitialAction()) {
      makeFirstMove();
    }
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
      'false-flag-container': isFalseFlag,
      open: isOpen,
      shut: !isOpen || isFlagged
    }
  );

  const squareDisplay = () => {
    if (!isOpen && !isFlagged) {
      return null;
    } else if (isFalseFlag) {
      return (
        <>
          <Icon name="bomb" />
          <Icon className="false-flag" name="times" />
        </>
      );
    } else if (isFlagged) {
      return <Icon name="flag-checkered" />;
    } else if (square.hasMine) {
      return <Icon name="bomb" />;
    } else if (square.neighborsWithMines) {
      const neighborsCls = `neighbors ${getDigitAsString(
        square.neighborsWithMines
      )}-neighbors`;
      return <span className={neighborsCls}>{square.neighborsWithMines}</span>;
    } else {
      return null;
    }
  };

  return (
    <div
      className={squareCls}
      onClick={openSquare}
      onContextMenu={handleRightClick(toggleFlagged)}
      onKeyPress={handleKeyboard(toggleFlagged, 'Space')}
      tabIndex={isOpen ? -1 : 0}
    >
      {squareDisplay()}
    </div>
  );
};

export default Square;
