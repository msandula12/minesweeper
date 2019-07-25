import React from 'react';

import { ISquare } from '../types/square';

import Square from './Square';

type Props = {
  columns: number;
  mines: number;
  rows: number;
};

const Minesweeper = ({ columns = 10, mines = 5, rows = 10 }: Props) => {
  const gridRows = () => {
    const grid: ISquare[][] = [];
    for (let i = 0; i < rows; i++) {
      const row: ISquare[] = [];
      for (let j = 0; j < columns; j++) {
        const basicSquare: ISquare = {
          isMine: Math.random() > 0.75, // TODO: Assign dynamically
          isOpen: Math.random() > 0.5, // TODO: Assign dynamically
          neighborsWithMines: Math.floor(Math.random() * 5) // TODO: Assess dynamically
        };
        row.push(basicSquare);
      }
      grid.push(row);
    }

    console.log(grid);
    return grid;
  };

  return (
    <div>
      {gridRows().map((row: ISquare[], rowIndex: number) => (
        <div className="grid-row" key={`row-${rowIndex}`}>
          {row.map((square: ISquare, sqIndex: number) => (
            <Square key={`square-${sqIndex}`} square={square} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Minesweeper;
