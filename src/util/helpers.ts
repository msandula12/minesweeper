import { IGrid, ISquare } from '../types/general';

export const generateGridRows = (rows: number, columns: number): IGrid => {
  const grid: IGrid = [];
  for (let i = 0; i < rows; i++) {
    const row: ISquare[] = [];
    for (let j = 0; j < columns; j++) {
      const basicSquare: ISquare = {
        cellIndex: j,
        isFlagged: false,
        isMine: Math.random() > 0.8, // TODO: Assign dynamically
        isOpen: false,
        neighborsWithMines: 0,
        rowIndex: i
      };
      row.push(basicSquare);
    }
    grid.push(row);
  }

  // Once mines are in place, figure out the numberOfNeighbors each square has
  grid.forEach(row => {
    row.forEach(square => {
      square.neighborsWithMines = getNumberOfNeighbors(square, grid);
    });
  });

  return grid;
};

export const getNumberOfNeighbors = (square: ISquare, grid: IGrid): number => {
  const rowAbove = grid[square.rowIndex - 1] || [];
  const rowOfSquare = grid[square.rowIndex];
  const rowBelow = grid[square.rowIndex + 1] || [];
  const neighbors = [
    rowAbove[square.cellIndex - 1],
    rowAbove[square.cellIndex],
    rowAbove[square.cellIndex + 1],
    rowOfSquare[square.cellIndex - 1],
    rowOfSquare[square.cellIndex + 1],
    rowBelow[square.cellIndex - 1],
    rowBelow[square.cellIndex],
    rowBelow[square.cellIndex + 1]
  ].filter(Boolean);
  return neighbors.filter(neighbor => neighbor.isMine).length;
};
