import {
  GameStatus,
  IGame,
  IGameConfiguration,
  IGrid,
  IMineLocation,
  ISquare
} from '../types/general';

export const generateGridRows = (
  rows: number,
  columns: number,
  mines: number
): IGrid => {
  const mineLocations = getMineLocations(rows, columns, mines);
  const grid: IGrid = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row: ISquare[] = [];
    for (let cellIndex = 0; cellIndex < columns; cellIndex++) {
      const basicSquare: ISquare = {
        cellIndex,
        isFlagged: false,
        isMine: mineLocations.some(
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

export const generateRandomID = (): string => {
  return Math.random()
    .toString(36)
    .substr(2, 9);
};

export const getMineLocations = (
  rows: number,
  columns: number,
  mines: number
): IMineLocation[] => {
  const locations: number[] = [];
  while (locations.length < mines) {
    const randomLocation = Math.floor(Math.random() * rows * columns);
    if (!locations.includes(randomLocation)) {
      locations.push(randomLocation);
    }
  }
  return locations.map(location => {
    return {
      row: Math.floor(location / rows),
      column: location % rows
    };
  });
};

export const getNewGame = (config: IGameConfiguration): IGame => {
  return {
    config,
    grid: generateGridRows(config.rows, config.columns, config.mines),
    id: generateRandomID(),
    status: GameStatus.IN_PROGRESS
  };
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
