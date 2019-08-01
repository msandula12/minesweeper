import React from 'react';

import { GameStatus, IGame, IGrid } from '../types/general';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  game: IGame;
  setStatus: (status: GameStatus) => unknown;
  startNewGame: () => unknown;
  updateGrid: (grid: IGrid) => unknown;
};

const Minesweeper = ({ game, setStatus, startNewGame, updateGrid }: Props) => {
  return (
    <div className="flex-column">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={game.config.mines} />
        <Smiley status={game.status} startNewGame={startNewGame} />
        <TimeCounter />
      </div>
      <Grid game={game} setStatus={setStatus} updateGrid={updateGrid} />{' '}
    </div>
  );
};

export default Minesweeper;
