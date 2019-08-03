import React, { useState } from 'react';

import { GameStatus, IGame, IGrid, ISquare } from '../types/general';

import Square from './Square';

type Props = {
  game: IGame;
  setStatus: (status: GameStatus) => unknown;
  updateGrid: (grid: IGrid) => unknown;
};

const Grid = ({ game, setStatus, updateGrid }: Props) => {
  const EMPTY_ARRAY: string[] = [];
  const [openSquares, setOpenSquares] = useState(EMPTY_ARRAY);

  const updateOpenSquares = (ids: string[]) => {
    setOpenSquares(ids);
  };

  return (
    <div className="grid margin-bottom-m">
      {game.grid.map((row: ISquare[], rowIndex: number) => (
        <div className="flex-row justify-center" key={`${game.id}-${rowIndex}`}>
          {row.map((_: ISquare, sqIndex: number) => (
            <Square
              game={game}
              key={`${game.id}-${rowIndex}-${sqIndex}`}
              openSquares={openSquares}
              setOpenSquares={updateOpenSquares}
              rowIndex={rowIndex}
              setStatus={setStatus}
              sqIndex={sqIndex}
              updateGrid={updateGrid}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
