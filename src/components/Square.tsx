import React from 'react';

import { ISquare } from '../types/square';

type Props = {
  square: ISquare;
};

const Square = ({ square }: Props) => {
  const squareDisplay = () => {
    if (square.isMine) {
      return <span>M</span>;
    } else {
      return <span>{square.neighborsWithMines}</span>;
    }
  };

  return <div className="square">{squareDisplay()}</div>;
};

export default Square;
