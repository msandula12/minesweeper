import { IGrid, IMineLocation, ISquare } from '../types/general';

const getMinePositions = (
  rows: number,
  columns: number,
  mines: number
): IMineLocation[] => {
  const positions: number[] = [];
  while (positions.length < mines) {
    const position = Math.floor(Math.random() * rows * columns);
    if (!positions.includes(position)) {
      positions.push(position);
    }
  }
  return positions.map(position => {
    return {
      row: Math.floor(position / rows),
      column: position % rows
    };
  });
};

export const generateGridRows = (
  rows: number,
  columns: number,
  mines: number
): IGrid => {
  const minePositions = getMinePositions(rows, columns, mines);
  const grid: IGrid = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row: ISquare[] = [];
    for (let cellIndex = 0; cellIndex < columns; cellIndex++) {
      const basicSquare: ISquare = {
        cellIndex,
        isFlagged: false,
        isMine: minePositions.some(
          mine => mine.row === rowIndex && mine.column === cellIndex
        ),
        isOpen: false,
        neighborsWithMines: 0,
        rowIndex
      };
      row.push(basicSquare);
    }
    grid.push(row);
  }

  // Once mines are in place, figure out the numberOfNeighbors each non-mine has
  grid.forEach(row => {
    row.forEach(square => {
      if (!square.isMine) {
        square.neighborsWithMines = getNumberOfNeighbors(square, grid);
      }
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
