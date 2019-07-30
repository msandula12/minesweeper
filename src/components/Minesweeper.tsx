import React, { useState } from 'react';

import { GameConfigurations, GameLevel } from '../types/general';

import Grid from './Grid';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

const Minesweeper = () => {
  // Set 'BEGINNER' as defaultConfig
  const defaultConfig = GameConfigurations.filter(
    config => config.level === GameLevel.BEGINNER
  )[0];

  const [config, setConfig] = useState(defaultConfig);

  return (
    <div className="flex-column column">
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
