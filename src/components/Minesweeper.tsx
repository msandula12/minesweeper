import React from 'react';

import { GameStatus, IGame } from '../types/general';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  game: IGame;
  setStatus: (status: GameStatus) => unknown;
  startNewGame: () => unknown;
};

const Minesweeper = ({ game, setStatus, startNewGame }: Props) => {
  return (
    <div className="flex-column">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={game.config.mines} />
        <Smiley status={game.status} startNewGame={startNewGame} />
        <TimeCounter />
      </div>
      <Grid game={game} setStatus={setStatus} />{' '}
    </div>
  );
};

export default Minesweeper;
