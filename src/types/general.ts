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
  isFlagged: boolean;
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

export enum GameLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  EXPERT = 'Expert',
  CUSTOM = 'Custom'
}

export const GameConfigurations: IGameConfiguration[] = [
  {
    columns: 9,
    level: GameLevel.BEGINNER,
    mines: 10,
    rows: 9
  },
  {
    columns: 16,
    level: GameLevel.INTERMEDIATE,
    mines: 40,
    rows: 16
  },
  {
    columns: 30,
    level: GameLevel.EXPERT,
    mines: 99,
    rows: 16
  },
  {
    columns: 0,
    level: GameLevel.CUSTOM,
    mines: 0,
    rows: 0
  }
];

export const DEFAULT_CONFIG = GameConfigurations.filter(
  config => config.level === GameLevel.BEGINNER
)[0];
