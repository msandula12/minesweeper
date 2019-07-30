import React, { useState } from 'react';

import { GameConfigurations, GameLevel } from '../types/general';

import Grid from './Grid';
import Icon from './Icon';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

const Minesweeper = () => {
  // Set 'BEGINNER' as defaultConfig
  const defaultConfig = GameConfigurations.filter(
    config => config.level === GameLevel.BEGINNER
  )[0];

  const [config, setConfig] = useState(defaultConfig);
  // const [game, setGame] = useState();

  return (
    <div className="flex-column minesweeper">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={5} />
        <Smiley />
        <TimeCounter />
      </div>
      <Grid columns={config.columns} rows={config.rows} mines={config.mines} />{' '}
      <div className="fluid flex-row justify-between margin-bottom-m">
        <div className="text-btn">
          <Icon name="layer-group" withMargin />
          Level
        </div>
        <div className="text-btn">
          <Icon name="pencil-ruler" withMargin />
          Rules
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;
