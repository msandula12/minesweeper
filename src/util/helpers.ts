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
        isOpen: true,
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
  const rowOfSquare = grid[square.rowIndex];

  const isFirstInRow = square.cellIndex === 0;
  const isLastInRow = square.cellIndex === rowOfSquare.length - 1;

  const rowAbove = square.rowIndex > 0 ? grid[square.rowIndex - 1] : [];
  const rowBelow =
    square.rowIndex < grid.length - 1 ? grid[square.rowIndex + 1] : [];

  const neighbors = [
    ...rowAbove.slice(
      isFirstInRow ? 0 : square.cellIndex - 1,
      isLastInRow ? rowAbove.length : square.cellIndex + 2
    ), // The squares directly above it
    rowOfSquare[square.cellIndex - 1], // The square to its left
    rowOfSquare[square.cellIndex + 1], // The square to its right
    ...rowBelow.slice(
      isFirstInRow ? 0 : square.cellIndex - 1,
      isLastInRow ? rowBelow.length : square.cellIndex + 2
    ) // The squares directly below it
  ].filter(Boolean);

  return neighbors.filter(neighbor => neighbor.isMine).length;
};
