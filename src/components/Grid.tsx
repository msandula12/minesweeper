import React from 'react';

import { ISquare } from '../types/general';
import { generateGridRows } from '../util/helpers';

import Square from './Square';

type Props = {
  columns: number;
  mines: number;
  rows: number;
};

const Grid = ({ columns = 10, mines = 5, rows = 10 }: Props) => {
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
