import React, { useState } from 'react';
import './App.css';

import { GameConfigurations, GameLevel } from './types/general';

import LevelPicker from './components/LevelPicker';
import Minesweeper from './components/Minesweeper';
import Rules from './components/Rules';

const App: React.FC = () => {
  // Set 'BEGINNER' as defaultConfig
  const defaultConfig = GameConfigurations.filter(
    config => config.level === GameLevel.BEGINNER
  )[0];

  const [config, setConfig] = useState(defaultConfig);

  const setLevel = (level: GameLevel): void => {
    const newConfig = GameConfigurations.filter(
      config => config.level === level
    )[0];
    setConfig(newConfig);
  };

  return (
    <>
      <h1 className="center mono font-l margin-bottom-l">Minesweeper</h1>
      <div className="flex-row justify-between">
        <div className="column column-sm">
          <h2 className="mono side-heading margin-bottom-m">Level</h2>
          <LevelPicker currentLevel={config.level} setLevel={setLevel} />
        </div>
        <Minesweeper config={config} />
        <div className="column column-sm">
          <h2 className="mono side-heading margin-bottom-m">Rules</h2>
          <Rules />
        </div>
      </div>
    </>
  );
};

export default App;
