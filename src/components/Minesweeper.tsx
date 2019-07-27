import React from 'react';

import Grid from './Grid';
import Icon from './Icon';
import MineCounter from './MineCounter';
import Smiley from './Smiley';
import TimeCounter from './TimeCounter';

const Minesweeper = () => {
  return (
    <div className="flex-column minesweeper">
      <div className="fluid flex-row justify-between margin-bottom-m">
        <MineCounter mines={5} />
        <Smiley />
        <TimeCounter />
      </div>
      <Grid columns={10} rows={10} mines={10} />{' '}
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
