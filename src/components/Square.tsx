import React from 'react';

import { ISquare } from '../types/square';

type Props = {
  square: ISquare;
};

const Square = ({ square }: Props) => {
  const squareDisplay = () => {
    if (!square.isOpen) {
      return null;
    } else if (square.isMine) {
      return (
        <span>
          <i className="fas fa-bomb" />
        </span>
      );
    } else {
      return <span className="neighbors">{square.neighborsWithMines}</span>;
    }
  };

  return <div className="square">{squareDisplay()}</div>;
};

export default Square;
