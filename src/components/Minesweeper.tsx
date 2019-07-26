import React from 'react';

import MineCounter from './MineCounter';
import TimeCounter from './TimeCounter';
import Grid from './Grid';
import Smiley from './Smiley';

const Minesweeper = () => {
  return (
    <div className="flex-column">
      <div className="toolbar flex-row justify-between">
        <MineCounter mines={5} />
        <Smiley />
        <TimeCounter />
      </div>
      <Grid columns={10} rows={10} mines={5} />{' '}
    </div>
  );
};

export default Minesweeper;
