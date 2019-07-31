import React from 'react';

import { GameStatus, IGame, ISquare } from '../types/general';

import Square from './Square';

type Props = {
  game: IGame;
  setStatus: (status: GameStatus) => unknown;
};

const Grid = ({ game, setStatus }: Props) => {
  return (
    <div className="grid margin-bottom-m">
      {game.grid.map((row: ISquare[], rowIndex: number) => (
        <div className="flex-row justify-center" key={`${game.id}-${rowIndex}`}>
          {row.map((_: ISquare, sqIndex: number) => (
            <Square
              key={`${game.id}-${rowIndex}-${sqIndex}`}
              game={game}
              rowIndex={rowIndex}
              sqIndex={sqIndex}
              setStatus={setStatus}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
