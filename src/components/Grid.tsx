import React, { useState } from 'react';

import { GameStatus, IGame, ISquare } from '../types/general';

import Square from './Square';

type Props = {
  game: IGame;
  setStatus: (status: GameStatus) => unknown;
};

const Grid = ({ game, setStatus }: Props) => {
  const EMPTY_ARRAY: string[] = [];
  const [openSquares, setOpenSquares] = useState(EMPTY_ARRAY);

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
