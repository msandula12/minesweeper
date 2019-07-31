import React from 'react';

import { IGameConfiguration } from '../types/general';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

type Props = {
  config: IGameConfiguration;
};

const Minesweeper = ({ config }: Props) => {
  return (
    <div className="flex-column">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={config.mines} />
        <Smiley />
        <TimeCounter />
      </div>
      <Grid columns={config.columns} rows={config.rows} mines={config.mines} />{' '}
    </div>
  );
};

export default Minesweeper;
