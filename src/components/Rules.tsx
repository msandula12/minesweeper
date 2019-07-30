import React from 'react';

import Icon from './Icon';

const Rules = () => {
  return (
    <>
      <ul>
        <li>Left-click an empty square to reveal it</li>
        <li>
          Right-click (or <code>ctrl+click</code> on Windows,{' '}
          <code>cmd+click</code> on Mac) an empty square to flag it (
          <Icon name="flag-checkered" />)
        </li>
        <li>
          Midde-click (or left+right click) a number to reveal its adjacent
          squares
        </li>
        <li>
          Press <code>space</code> while hovering over a square to flag it or
          reveal its adjacent squares
        </li>
        <li>
          Press <code>F2</code> to start a new game
        </li>
      </ul>
    </>
  );
};

export default Rules;
