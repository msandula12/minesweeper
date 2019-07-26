import React from 'react';

import MineCounter from './MineCounter';
import TimeCounter from './TimeCounter';
import Grid from './Grid';
import Icon from './Icon';
import Smiley from './Smiley';

const Minesweeper = () => {
  return (
    <div className="flex-column">
      <div className="toolbar flex-row justify-between">
        <MineCounter mines={5} />
        <Smiley />
        <TimeCounter />
      </div>
      <Grid columns={10} rows={10} mines={10} />{' '}
      <div className="toolbar flex-row justify-between">
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
