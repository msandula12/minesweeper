import React from 'react';

import Icon from './Icon';

const Rules = () => {
  return (
    <>
      <h3 className="mono">New game</h3>
      <p className="indented-s">
        Press <code>F2</code> to start a new game
      </p>

      <h3 className="mono">Open a square</h3>
      <p className="indented-s">Left-click an empty square to reveal it</p>

      <h3 className="mono">
        Flag a square (
        <Icon name="flag-checkered" />)
      </h3>
      <p className="indented-s">
        If you think a square has a mine, you can flag it by right-clicking,{' '}
        left-clicking while holding down the <code>ctrl</code> key, or hovering
        over it and pressing <code>space</code>
      </p>

      <h3 className="mono">View adjacent squares</h3>
      <p className="indented-s">
        Midde-click (or left+right click) a square to show its adjacent squares
      </p>
    </>
  );
};

export default Rules;
