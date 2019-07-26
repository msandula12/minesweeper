import React from 'react';

import Grid from './Grid';
import Smiley from './Smiley';

const Minesweeper = () => {
  return (
    <div className="minesweeper">
      <div className="toolbar">
        <div>005</div>
        <Smiley />
        <div>000</div>
      </div>
      <Grid columns={10} rows={10} mines={5} />{' '}
    </div>
  );
};

export default Minesweeper;
