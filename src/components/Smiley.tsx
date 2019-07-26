import React from 'react';

const Smiley = () => {
  const smileType = (): string => {
    return 'smile'; // NORMAL
    // return 'dizzy'; // LOST
    // return 'grin-stars'; // WON
  };

  const startNewGame = () => {
    console.log('start new game!');
  };

  return (
    <i onClick={startNewGame} className={`fas fa-${smileType()} smiley`} />
  );
};

export default Smiley;
