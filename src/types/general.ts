export interface IGame {
  columns: number;
  gameStatus: GameStatus;
  grid: ISquare[][];
  mines: number;
  rows: number;
}

export interface ISquare {
  cellIndex: number;
  isFlagged: boolean;
  isMine: boolean;
  isOpen: boolean;
  neighborsWithMines: number;
  rowIndex: number;
}

export enum GameStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  LOST = 'LOST',
  WON = 'WON'
}
