import React from 'react';

import Icon from './Icon';

// import { GameStatus } from '../types/general';

const Smiley = () => {
  const smileType = (): string => {
    // switch () {
    //   case GameStatus.WON:
    //     return 'grin-stars';
    //   case GameStatus.LOST:
    //     return 'dizzy';
    //   default:
    //     return 'smile';
    // }

    return 'smile';
  };

  const startNewGame = () => {
    console.log('start new game!');
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
