import React from 'react';

import { IGame } from '../types/general';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  game: IGame;
};

const Minesweeper = ({ game }: Props) => {
  return (
    <div className="flex-column">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={game.config.mines} />
        <Smiley />
        <TimeCounter />
      </div>
      <Grid config={game.config} game={game} />{' '}
    </div>
  );
};

export default Minesweeper;
