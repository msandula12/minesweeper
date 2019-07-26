import React from 'react';

import Counter from './Counter';

type Props = {
  mines: number;
};

const MineCounter = ({ mines }: Props) => {
  return <Counter count={mines} />;
};

export default MineCounter;
