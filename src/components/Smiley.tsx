import React from 'react';

const Smiley = () => {
  const smileType = (): string => {
    return 'smile'; // NORMAL
    // return 'dizzy'; // LOST
    // return 'grin-stars'; // WON
  };

  return <i className={`fas fa-${smileType()} smiley`} />;
};

export default Smiley;
