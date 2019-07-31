import React, { useState } from 'react';
import './App.css';

import {
  DEFAULT_CONFIG,
  GameConfigurations,
  GameLevel,
  GameStatus
} from './types/general';

import { getNewGame } from './util/helpers';

import LevelPicker from './components/LevelPicker';
import Minesweeper from './components/Minesweeper';
import Rules from './components/Rules';

const App: React.FC = () => {
  // Start a 'BEGINNER'-level game on load
  const [game, setGame] = useState(getNewGame(DEFAULT_CONFIG));

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
    setGame(getNewGame(game.config));
  };

  const setStatus = (status: GameStatus) => {
    setGame({
      ...game,
      status
    });
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
          startNewGame={startNewGame}
          setStatus={setStatus}
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
