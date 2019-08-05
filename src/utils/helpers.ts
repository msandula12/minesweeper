import React, { SyntheticEvent } from 'react';

import { flatten, uniq } from 'lodash';

import { GameStatus } from '../constants';
import {
  IGame,
  IGameConfiguration,
  IGrid,
  IMineLocation,
  ISquare
} from '../types';

export const generateGridRows = (config: IGameConfiguration): IGrid => {
  const { columns, mines, rows } = config;
  const mineLocations = getMineLocations(rows, columns, mines);
  const grid: IGrid = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row: ISquare[] = [];
    for (let cellIndex = 0; cellIndex < columns; cellIndex++) {
      const basicSquare: ISquare = {
        cellIndex,
        isFlagged: false,
        hasMine: mineLocations.some(
          mine => mine.row === rowIndex && mine.column === cellIndex
        ),
        id: generateRandomID(),
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
      if (!square.hasMine) {
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

export const getDigitAsString = (digit: number): string => {
  const digitsAsWords = ['one', 'two', 'three', 'four'];
  return digitsAsWords[digit - 1];
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
      column: Math.floor(location / rows),
      row: location % columns
    };
  });
};

export const getNewGame = (config: IGameConfiguration): IGame => {
  return {
    config,
    grid: generateGridRows(config),
    id: generateRandomID(),
    status: GameStatus.IN_PROGRESS
  };
};

export const getNumberOfNeighbors = (square: ISquare, grid: IGrid): number => {
  const { cellIndex, rowIndex } = square;

  const rowAbove = grid[rowIndex - 1] || [];
  const rowOfSquare = grid[rowIndex] || [];
  const rowBelow = grid[rowIndex + 1] || [];

  const neighbors = [
    rowAbove[cellIndex - 1],
    rowAbove[cellIndex],
    rowAbove[cellIndex + 1],
    rowOfSquare[cellIndex - 1],
    rowOfSquare[cellIndex + 1],
    rowBelow[cellIndex - 1],
    rowBelow[cellIndex],
    rowBelow[cellIndex + 1]
  ].filter(Boolean);

  return neighbors.filter(neighbor => neighbor.hasMine).length;
};

export const getSafeNeighbors = (
  square: ISquare,
  grid: IGrid,
  flaggedSquares: string[],
  openSquares: string[]
): string[] => {
  const safeNeighbors: string[] = [];

  const _getSafeNeighbors = (sq: ISquare, grid: IGrid) => {
    const { cellIndex, rowIndex } = sq;

    const rowAbove = grid[rowIndex - 1] || [];
    const rowOfSquare = grid[rowIndex] || [];
    const rowBelow = grid[rowIndex + 1] || [];

    const neighbors = [
      rowAbove[cellIndex],
      rowOfSquare[cellIndex - 1],
      rowOfSquare[cellIndex + 1],
      rowBelow[cellIndex]
    ].filter(
      n =>
        n &&
        !n.hasMine &&
        !openSquares.includes(n.id) &&
        !flaggedSquares.includes(n.id) &&
        !safeNeighbors.includes(n.id)
    );

    neighbors.forEach(neighbor => {
      safeNeighbors.push(neighbor.id);
      if (neighbor.neighborsWithMines === 0) {
        _getSafeNeighbors(neighbor, grid);
      }
    });
  };

  _getSafeNeighbors(square, grid);
  return uniq(safeNeighbors);
};

export const getSquaresWithMines = (grid: IGrid): string[] => {
  const squaresWithMines = flatten(
    grid.map(rows => rows.filter(square => square.hasMine))
  );
  return squaresWithMines.map(square => square.id);
};

export const handleRightClick = (curriedFunction: Function) => (
  e: SyntheticEvent
) => {
  e.preventDefault();
  curriedFunction();
};

export const handleKeyboard = (curriedFunction: Function, charCode: string) => (
  e: React.KeyboardEvent
) => {
  e.persist();
  if (e.nativeEvent.code === charCode) {
    curriedFunction();
  }
};

export const hasWonGame = (
  config: IGameConfiguration,
  openSquares: string[]
): boolean => {
  const { columns, mines, rows } = config;
  return columns * rows === openSquares.length + mines;
};
