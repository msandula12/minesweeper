import React from 'react';

import { IGame } from '../types/general';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  game: IGame;
  startNewGame: () => unknown;
};

const Minesweeper = ({ game, startNewGame }: Props) => {
  return (
    <div className="flex-column">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={game.config.mines} />
        <Smiley status={game.status} startNewGame={startNewGame} />
        <TimeCounter />
      </div>
      <Grid game={game} />{' '}
    </div>
  );
};

export default Minesweeper;
