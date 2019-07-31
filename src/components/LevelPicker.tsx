import React from 'react';

import { GameConfigurations, GameLevel } from '../types/general';

type Props = {
  currentLevel: GameLevel;
  setLevel: (level: GameLevel) => void;
};

const LevelPicker = ({ currentLevel, setLevel }: Props) => {
  return (
    <table cellSpacing="0">
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
            onClick={() => setLevel(config.level)}
          >
            <td>{config.level}</td>
            <td className="center">{config.columns}</td>
            <td className="center">{config.rows}</td>
            <td className="center">{config.mines}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LevelPicker;
