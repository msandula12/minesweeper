export interface ISquare {
  isFlagged: boolean;
  isMine: boolean;
  isOpen: boolean;
  neighborsWithMines: number;
}
