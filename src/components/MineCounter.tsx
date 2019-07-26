import React from 'react';

import Counter from './Counter';

type Props = {
  mines: number;
};

const MineCounter = ({ mines }: Props) => {
  return (
    <div>
      <span className="mono">Mines: </span>
      <Counter count={mines} />
    </div>
  );
};

export default MineCounter;
