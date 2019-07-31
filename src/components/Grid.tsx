import React from 'react';

import { IGame, IGameConfiguration, ISquare } from '../types/general';

import Square from './Square';

type Props = {
  config: IGameConfiguration;
  game: IGame;
};

const Grid = ({ game }: Props) => {
  return (
    <div className="grid margin-bottom-m">
      {game.grid.map((row: ISquare[], rowIndex: number) => (
        <div className="flex-row justify-center" key={`row-${rowIndex}`}>
          {row.map((square: ISquare, sqIndex: number) => (
            <Square key={`square-${sqIndex}`} square={square} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
