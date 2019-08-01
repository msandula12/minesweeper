import React, { useState } from 'react';
import './App.css';

import {
  DEFAULT_CONFIG,
  GameConfigurations,
  GameLevel,
  GameStatus,
  IGrid
} from './types/general';

import { getNewGame, updateGame } from './util/helpers';

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

  const updateGrid = (grid: IGrid) => {
    setGame(updateGame(game.config, grid));
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
          setStatus={setStatus}
          startNewGame={startNewGame}
          updateGrid={updateGrid}
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
