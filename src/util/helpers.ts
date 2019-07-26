import { IGrid, ISquare } from '../types/general';

export const generateGridRows = (rows: number, columns: number): IGrid => {
  const grid: IGrid = [];
  for (let i = 0; i < rows; i++) {
    const row: ISquare[] = [];
    for (let j = 0; j < columns; j++) {
      const basicSquare: ISquare = {
        cellIndex: j,
        isFlagged: false,
        isMine: Math.random() > 0.75, // TODO: Assign dynamically
        isOpen: false,
        neighborsWithMines: Math.floor(Math.random() * 5), // TODO: Assess dynamically
        rowIndex: i
      };
      row.push(basicSquare);
    }
    grid.push(row);
  }
  return grid;
};

export const getNumberOfNeighbors = (square: ISquare, grid: IGrid): number => {
  return 0;
};
