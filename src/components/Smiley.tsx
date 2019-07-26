import React from 'react';

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
    <i
      onClick={startNewGame}
      className={`fas fa-${smileType()} smiley font-xl`}
    />
  );
};

export default Smiley;
