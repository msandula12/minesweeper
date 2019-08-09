import React from 'react';

import { GameStatus, GameTimer } from '../constants';
import { IGame } from '../types';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  flaggedSquares: string[];
  game: IGame;
  gameTimer: GameTimer;
  makeFirstMove: () => unknown;
  openSquares: string[];
  setFlaggedSquares: (ids: string[]) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
  startNewGame: () => unknown;
};

const Minesweeper = ({
  flaggedSquares,
  game,
  gameTimer,
  makeFirstMove,
  openSquares,
  setFlaggedSquares,
  setOpenSquares,
  setStatus,
  startNewGame
}: Props) => {
  return (
    <div className="flex-column">
      <div className="flex-row justify-center margin-bottom-m">
        <MineCounter
          flaggedSquares={flaggedSquares}
          mines={game.config.mines}
        />
        <Smiley status={game.status} startNewGame={startNewGame} />
        <TimeCounter gameTimer={gameTimer} />
      </div>
      <Grid
        config={game.config}
        flaggedSquares={flaggedSquares}
        game={game}
        makeFirstMove={makeFirstMove}
        openSquares={openSquares}
        setFlaggedSquares={setFlaggedSquares}
        setOpenSquares={setOpenSquares}
        setStatus={setStatus}
      />{' '}
    </div>
  );
};

export default Minesweeper;
