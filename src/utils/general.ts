import React, { SyntheticEvent } from 'react';

export const difference = <T>(list: T[], exclusions: T[]): T[] => {
  return list.filter(item => !exclusions.includes(item));
};

export const flatten = <T>(list: T[][]): T[] => {
  return ([] as T[]).concat(...list);
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

export const uniq = <T>(list: T[]): T[] => {
  return list.filter((item, index, array) => array.indexOf(item) === index);
};
