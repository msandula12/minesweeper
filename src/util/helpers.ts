import { ISquare } from '../types/square';

export const generateGridRows = (
  rows: number,
  columns: number
): ISquare[][] => {
  const grid: ISquare[][] = [];
  for (let i = 0; i < rows; i++) {
    const row: ISquare[] = [];
    for (let j = 0; j < columns; j++) {
      const basicSquare: ISquare = {
        isFlagged: Math.random() > 0.8,
        isMine: Math.random() > 0.75, // TODO: Assign dynamically
        isOpen: false,
        neighborsWithMines: Math.floor(Math.random() * 5) // TODO: Assess dynamically
      };
      row.push(basicSquare);
    }
    grid.push(row);
  }
  return grid;
};
