import React from 'react';

import { GameConfigurations, GameLevel } from '../constants';

type Props = {
  currentLevel: GameLevel;
  setCurrentLevel: (level: GameLevel) => unknown;
  startNewGame: () => unknown;
};

const LevelPicker = ({
  currentLevel,
  setCurrentLevel,
  startNewGame
}: Props) => {
  return (
    <>
      <table cellSpacing="0" className="margin-bottom-m">
        <thead>
          <tr>
            <th>Level</th>
            <th>Columns</th>
            <th>Rows</th>
            <th>Mines</th>
          </tr>
        </thead>
        <tbody>
          {GameConfigurations.map(config => (
            <tr
              key={config.level}
              className={`row-level ${
                config.level === currentLevel ? 'selected' : ''
              }`}
              onClick={() => setCurrentLevel(config.level)}
            >
              <td>{config.level}</td>
              <td className="center">{config.columns}</td>
              <td className="center">{config.rows}</td>
              <td className="center">{config.mines}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="fluid" onClick={startNewGame}>
        Start new game!
      </button>
    </>
  );
};

export default LevelPicker;
