import React from 'react';

import { GameConfigurations, GameLevel } from '../constants';

import Input from './Input';

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
            <th className="center width-xl">Columns</th>
            <th className="center width-xl">Rows</th>
            <th className="center width-xl">Mines</th>
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
              {config.level === GameLevel.CUSTOM ? (
                <>
                  <td className="center width-xl">
                    <Input
                      className="center fluid"
                      max={99}
                      min={1}
                      type="number"
                      value={config.columns}
                    />
                  </td>
                  <td className="center width-xl">
                    <Input
                      className="center fluid"
                      max={99}
                      min={1}
                      type="number"
                      value={config.rows}
                    />
                  </td>
                  <td className="center width-xl">
                    <Input
                      className="center fluid"
                      max={99}
                      min={1}
                      type="number"
                      value={config.mines}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td className="center width-xl">{config.columns}</td>
                  <td className="center width-xl">{config.rows}</td>
                  <td className="center width-xl">{config.mines}</td>
                </>
              )}
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
