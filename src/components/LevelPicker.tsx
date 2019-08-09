import React, { ChangeEvent } from 'react';

import { GameLevel } from '../constants';
import { IGameConfiguration } from '../types';

import Input from './Input';

type Props = {
  configurations: IGameConfiguration[];
  currentLevel: GameLevel;
  setConfigurations: (configs: IGameConfiguration[]) => unknown;
  setCurrentLevel: (level: GameLevel) => unknown;
  startNewGame: () => unknown;
};

const LevelPicker = ({
  configurations,
  currentLevel,
  setConfigurations,
  setCurrentLevel,
  startNewGame
}: Props) => {
  const handleOnChange = ({
    target: { name, value }
  }: ChangeEvent<HTMLInputElement>) => {
    setConfigurations(
      configurations.map(config => {
        if (config.level !== GameLevel.CUSTOM) {
          return config;
        }
        return {
          ...config,
          [name]: Number(value)
        };
      })
    );
  };

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
          {configurations.map(config => (
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
                      name="columns"
                      onChange={handleOnChange}
                      type="number"
                      value={config.columns}
                    />
                  </td>
                  <td className="center width-xl">
                    <Input
                      className="center fluid"
                      max={99}
                      min={1}
                      name="rows"
                      onChange={handleOnChange}
                      type="number"
                      value={config.rows}
                    />
                  </td>
                  <td className="center width-xl">
                    <Input
                      className="center fluid"
                      max={config.columns * config.rows - 1}
                      min={1}
                      name="mines"
                      onChange={handleOnChange}
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
