import React from 'react';

import { GameStatus } from '../constants';
import { IGame, ISquare } from '../types';

import Square from './Square';

type Props = {
  flaggedSquares: string[];
  game: IGame;
  openSquares: string[];
  setFlaggedSquares: (ids: string[]) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
};

const Grid = ({
  flaggedSquares,
  game,
  openSquares,
  setFlaggedSquares,
  setStatus,
  setOpenSquares
}: Props) => {
  return (
    <div className="grid margin-bottom-m">
      {game.grid.map((row: ISquare[], rowIndex: number) => (
        <div className="flex-row justify-center" key={`${game.id}-${rowIndex}`}>
          {row.map((square: ISquare, sqIndex: number) => (
            <Square
              flaggedSquares={flaggedSquares}
              grid={game.grid}
              key={`${game.id}-${rowIndex}-${sqIndex}`}
              openSquares={openSquares}
              setOpenSquares={setOpenSquares}
              setFlaggedSquares={setFlaggedSquares}
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
