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
  const row = grid[square.rowIndex];
  const rowAbove = grid[square.rowIndex - 1];
  const rowBelow = grid[square.rowIndex + 1];

  const neighbors = [
    ...rowAbove.slice(square.cellIndex - 1, square.cellIndex + 1),
    row[square.cellIndex - 1],
    row[square.cellIndex + 1],
    ...rowBelow.slice(square.cellIndex - 1, square.cellIndex + 1)
  ];

  console.log('neighbors: ', neighbors);

  const neighborsWithMines = neighbors.filter(neighbor => neighbor.isMine);
  return neighborsWithMines.length;
};
