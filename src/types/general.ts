export interface IGame {
  columns: number;
  gameStatus: GameStatus;
  grid: IGrid;
  mines: number;
  rows: number;
}

export type IGrid = ISquare[][];

export interface ISquare {
  cellIndex: number;
  isFlagged: boolean;
  isMine: boolean;
  isOpen: boolean;
  neighborsWithMines: number;
  rowIndex: number;
}

export interface IMineLocation {
  column: number;
  row: number;
}

export enum GameStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  LOST = 'LOST',
  WON = 'WON'
}
