import React from 'react';

import Counter from './Counter';

type Props = {
  flaggedSquares: string[];
  mines: number;
};

const MineCounter = ({ flaggedSquares, mines }: Props) => {
  return (
    <div>
      <div className="counter-label">Mines</div>
      <Counter count={mines - flaggedSquares.length} />
    </div>
  );
};

export default MineCounter;
