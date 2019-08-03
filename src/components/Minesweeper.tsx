import React from 'react';

import { GameStatus } from '../constants';
import { IGame } from '../types';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  flaggedSquares: string[];
  game: IGame;
  openSquares: string[];
  setFlaggedSquares: (ids: string[]) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
  startNewGame: () => unknown;
};

const Minesweeper = ({
  game,
  flaggedSquares,
  setFlaggedSquares,
  openSquares,
  setOpenSquares,
  setStatus,
  startNewGame
}: Props) => {
  return (
    <div className="flex-column">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter
          flaggedSquares={flaggedSquares}
          mines={game.config.mines}
        />
        <Smiley status={game.status} startNewGame={startNewGame} />
        <TimeCounter />
      </div>
      <Grid
        flaggedSquares={flaggedSquares}
        game={game}
        openSquares={openSquares}
        setFlaggedSquares={setFlaggedSquares}
        setOpenSquares={setOpenSquares}
        setStatus={setStatus}
      />{' '}
    </div>
  );
};

export default Minesweeper;
