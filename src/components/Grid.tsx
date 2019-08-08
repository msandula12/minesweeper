import React, { useState } from 'react';

import { EMPTY_STRING_ARRAY, GameStatus } from '../constants';
import { IGame, IGameConfiguration, ISquare } from '../types';

import Square from './Square';

type Props = {
  config: IGameConfiguration;
  flaggedSquares: string[];
  game: IGame;
  makeFirstMove: () => unknown;
  openSquares: string[];
  setFlaggedSquares: (ids: string[]) => unknown;
  setOpenSquares: (ids: string[]) => unknown;
  setStatus: (status: GameStatus) => unknown;
};

const Grid = ({
  config,
  flaggedSquares,
  game,
  makeFirstMove,
  openSquares,
  setFlaggedSquares,
  setOpenSquares,
  setStatus
}: Props) => {
  const [falseFlags, setFalseFlags] = useState(EMPTY_STRING_ARRAY);

  const updateFalseFlags = (ids: string[]) => {
    setFalseFlags(ids);
  };

  return (
    <div className="grid margin-bottom-m">
      {game.grid.map((row: ISquare[], rowIndex: number) => (
        <div className="flex-row justify-center" key={`${game.id}-${rowIndex}`}>
          {row.map((square: ISquare, sqIndex: number) => (
            <Square
              config={config}
              falseFlags={falseFlags}
              flaggedSquares={flaggedSquares}
              game={game}
              key={`${game.id}-${rowIndex}-${sqIndex}`}
              makeFirstMove={makeFirstMove}
              openSquares={openSquares}
              setFalseFlags={updateFalseFlags}
              setFlaggedSquares={setFlaggedSquares}
              setOpenSquares={setOpenSquares}
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
