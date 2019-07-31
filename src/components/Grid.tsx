import React from 'react';

import { IGameConfiguration, ISquare } from '../types/general';
import { generateGridRows } from '../util/helpers';

import Square from './Square';

type Props = {
  config: IGameConfiguration;
};

const Grid = ({ config }: Props) => {
  const { columns, mines, rows } = config;
  const gridRows = generateGridRows(rows, columns, mines);

  return (
    <div className="grid margin-bottom-m">
      {gridRows.map((row: ISquare[], rowIndex: number) => (
        <div className="flex-row justify-center" key={`row-${rowIndex}`}>
          {row.map((square: ISquare, sqIndex: number) => (
            <Square key={`square-${sqIndex}`} square={square} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
