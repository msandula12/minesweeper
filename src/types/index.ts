import { GameLevel, GameStatus } from '../constants';

export interface IGame {
  config: IGameConfiguration;
  grid: IGrid;
  id: string;
  status: GameStatus;
}

export type IGrid = ISquare[][];

export interface IGameConfiguration {
  columns: number;
  mines: number;
  rows: number;
  level: GameLevel;
}

export interface ISquare {
  cellIndex: number;
  hasMine: boolean;
  id: string;
  isFlagged: boolean;
  neighborsWithMines: number;
  rowIndex: number;
}

export interface IMineLocation {
  column: number;
  row: number;
}
