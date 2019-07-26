import React from 'react';

import Counter from './Counter';
import Grid from './Grid';
import Smiley from './Smiley';

const Minesweeper = () => {
  return (
    <div className="minesweeper">
      <div className="toolbar">
        <Counter count={5} />
        <Smiley />
        <Counter count={20} />
      </div>
      <Grid columns={10} rows={10} mines={5} />{' '}
    </div>
  );
};

export default Minesweeper;
