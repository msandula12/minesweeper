import React, { useEffect, useState } from 'react';

import { GameStatus } from '../constants';

import Counter from './Counter';

type Props = {
  status: GameStatus;
};

/**
 * INIT: secondsElapsed = 0
 * ON FIRST ACTION: secondsElapsed += 1
 * ON GAME END: pause secondsElapsed
 * ON NEW GAME: secondsElapsed = 0
 * if secondsElapsed = 999, set game to lost
 */

const TimeCounter = ({ status }: Props) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    // const gameTimer = setInterval(countTime, 1000);
    // return () => {
    //   clearInterval(gameTimer);
    // };
  }, [status]);

  const startTime = new Date().getTime();
  const countTime = () => {
    const updatedTime = new Date().getTime();
    setSecondsElapsed(parseInt(String((updatedTime - startTime) / 1000)));
  };

  return (
    <div className="flex-column align-center">
      <div className="counter-label">Time</div>
      <Counter count={secondsElapsed} />
    </div>
  );
};

export default TimeCounter;
