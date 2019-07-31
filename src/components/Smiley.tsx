import React from 'react';

import Icon from './Icon';

import { GameStatus } from '../types/general';

type Props = {
  status: GameStatus;
  startNewGame: () => unknown;
};

const Smiley = ({ status, startNewGame }: Props) => {
  const smileType = (): string => {
    switch (status) {
      case GameStatus.WON:
        return 'grin-stars';
      case GameStatus.LOST:
        return 'dizzy';
      default:
        return 'smile';
    }
  };

  return (
    <Icon
      className="smiley font-xl"
      name={smileType()}
      onClick={startNewGame}
    />
  );
};

export default Smiley;
