import React from 'react';

import Counter from './Counter';

type Props = {
  mines: number;
};

const MineCounter = ({ mines }: Props) => {
  return (
    <div className="flex-column align-center">
      <div className="counter-label">Mines</div>
      <Counter count={mines} />
    </div>
  );
};

export default MineCounter;
