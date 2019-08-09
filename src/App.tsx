import React, { useEffect, useState } from 'react';
import './App.css';

import {
  DEFAULT_CONFIG,
  EMPTY_STRING_ARRAY,
  GameConfigurations,
  GameLevel,
  GameStatus,
  GameTimer
} from './constants';

import { getNewGame } from './utils/helpers';

import LevelPicker from './components/LevelPicker';
import Minesweeper from './components/Minesweeper';
import Rules from './components/Rules';
import { IGameConfiguration } from './types';

const App: React.FC = () => {
  const [flaggedSquares, setFlaggedSquares] = useState(EMPTY_STRING_ARRAY);
  const [configurations, setConfigurations] = useState(GameConfigurations);
  const [currentLevel, setCurrentLevel] = useState(GameLevel.BEGINNER);
  const [game, setGame] = useState(getNewGame(DEFAULT_CONFIG));
  const [gameTimer, setGameTimer] = useState(GameTimer.PAUSED);
  const [firstMoveHasBeenMade, setFirstMoveHasBeenMade] = useState(false);
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

  const makeFirstMove = () => {
    if (firstMoveHasBeenMade) {
      return;
    }
    setFirstMoveHasBeenMade(true);
    setGameTimer(GameTimer.RUNNING);
  };

  const updateCurrentLevel = (level: GameLevel) => {
    if (currentLevel === level) {
      return;
    }
    setCurrentLevel(level);
  };

  const startNewGame = () => {
    setGameTimer(GameTimer.RESET);
    setFirstMoveHasBeenMade(false);
    setFlaggedSquares(EMPTY_STRING_ARRAY);
    setOpenSquares(EMPTY_STRING_ARRAY);
    const newConfig = configurations.filter(
      config => config.level === currentLevel
    )[0];
    setGame(getNewGame(newConfig));
  };

  const setStatus = (status: GameStatus) => {
    if (status !== GameStatus.IN_PROGRESS) {
      setGameTimer(GameTimer.PAUSED);
    }
    setGame({
      ...game,
      status
    });
  };

  const updateConfigurations = (configs: IGameConfiguration[]) => {
    setConfigurations(configs);
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
          <LevelPicker
            configurations={configurations}
            currentLevel={currentLevel}
            setConfigurations={updateConfigurations}
            setCurrentLevel={updateCurrentLevel}
            startNewGame={startNewGame}
          />
        </div>
        <Minesweeper
          flaggedSquares={flaggedSquares}
          game={game}
          gameTimer={gameTimer}
          openSquares={openSquares}
          setFlaggedSquares={updateFlaggedSquares}
          setOpenSquares={updateOpenSquares}
          setStatus={setStatus}
          startNewGame={startNewGame}
          makeFirstMove={makeFirstMove}
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
