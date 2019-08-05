import React, { useEffect, useState } from 'react';
import './App.css';

import {
  DEFAULT_CONFIG,
  EMPTY_STRING_ARRAY,
  GameConfigurations,
  GameLevel,
  GameStatus
} from './constants';

import { getNewGame } from './utils/helpers';

import LevelPicker from './components/LevelPicker';
import Minesweeper from './components/Minesweeper';
import Rules from './components/Rules';

const App: React.FC = () => {
  const [game, setGame] = useState(getNewGame(DEFAULT_CONFIG));
  const [flaggedSquares, setFlaggedSquares] = useState(EMPTY_STRING_ARRAY);
  const [openSquares, setOpenSquares] = useState(EMPTY_STRING_ARRAY);

  // Start new game on 'F2'
  useEffect(() => {
    const startNewGameOnF2 = (e: KeyboardEvent) => {
      if (e.code === 'F2') {
        startNewGame();
      }
    };
    window.addEventListener('keydown', startNewGameOnF2);
    return () => {
      window.removeEventListener('keydown', startNewGameOnF2);
    };
  });

  const setLevel = (level: GameLevel): void => {
    if (game.config.level === level) {
      return;
    }
    const newConfig = GameConfigurations.filter(
      config => config.level === level
    )[0];
    setGame(getNewGame(newConfig));
  };

  const startNewGame = () => {
    setFlaggedSquares(EMPTY_STRING_ARRAY);
    setOpenSquares(EMPTY_STRING_ARRAY);
    setGame(getNewGame(game.config));
  };

  const setStatus = (status: GameStatus) => {
    setGame({
      ...game,
      status
    });
  };

  const updateFlaggedSquares = (ids: string[]) => {
    setFlaggedSquares(ids);
  };

  const updateOpenSquares = (ids: string[]) => {
    setOpenSquares(ids);
  };

  return (
    <>
      <h1 className="center mono font-l margin-bottom-l">Minesweeper</h1>
      <div className="flex-row justify-between">
        <div className="column column-sm">
          <h2 className="mono side-heading margin-bottom-m">Level</h2>
          <LevelPicker currentLevel={game.config.level} setLevel={setLevel} />
        </div>
        <Minesweeper
          game={game}
          openSquares={openSquares}
          setOpenSquares={updateOpenSquares}
          setStatus={setStatus}
          startNewGame={startNewGame}
          flaggedSquares={flaggedSquares}
          setFlaggedSquares={updateFlaggedSquares}
        />
        <div className="column column-sm">
          <h2 className="mono side-heading margin-bottom-m">Rules</h2>
          <Rules />
        </div>
      </div>
    </>
  );
};

export default App;
