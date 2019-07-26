import React from 'react';

import { ISquare } from '../types/square';
import { generateGridRows } from '../util/helpers';

import Square from './Square';

type Props = {
  columns: number;
  mines: number;
  rows: number;
};

const Grid = ({ columns = 10, mines = 5, rows = 10 }: Props) => {
  const gridRows = generateGridRows(rows, columns);
  console.log('gridRows: ', gridRows);

  return (
    <div className="grid">
      {gridRows.map((row: ISquare[], rowIndex: number) => (
        <div className="grid-row" key={`row-${rowIndex}`}>
          {row.map((square: ISquare, sqIndex: number) => (
            <Square key={`square-${sqIndex}`} square={square} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
