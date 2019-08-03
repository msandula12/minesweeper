import React from 'react';

import { GameStatus } from '../constants';
import { IGame, ISquare } from '../types';

import Square from './Square';

type Props = {
  game: IGame;
  openSquares: string[];
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
};

const Grid = ({ game, openSquares, setStatus, setOpenSquares }: Props) => {
  const updateOpenSquares = (ids: string[]) => {
    setOpenSquares(ids);
  };

  return (
    <div className="grid margin-bottom-m">
      {game.grid.map((row: ISquare[], rowIndex: number) => (
        <div className="flex-row justify-center" key={`${game.id}-${rowIndex}`}>
          {row.map((square: ISquare, sqIndex: number) => (
            <Square
              grid={game.grid}
              key={`${game.id}-${rowIndex}-${sqIndex}`}
              openSquares={openSquares}
              setOpenSquares={updateOpenSquares}
              setStatus={setStatus}
              square={square}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
