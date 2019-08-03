import React from 'react';

import { GameStatus } from '../constants';
import { IGame } from '../types';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  game: IGame;
  openSquares: string[];
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
  startNewGame: () => unknown;
};

const Minesweeper = ({
  game,
  openSquares,
  setOpenSquares,
  setStatus,
  startNewGame
}: Props) => {
  return (
    <div className="flex-column">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={game.config.mines} />
        <Smiley status={game.status} startNewGame={startNewGame} />
        <TimeCounter />
      </div>
      <Grid
        game={game}
        openSquares={openSquares}
        setOpenSquares={setOpenSquares}
        setStatus={setStatus}
      />{' '}
    </div>
  );
};

export default Minesweeper;
