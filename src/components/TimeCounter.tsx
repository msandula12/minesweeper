import React, { useEffect, useState } from 'react';

import { GameTimer } from '../constants';

import Counter from './Counter';

type Props = {
  gameTimer: GameTimer;
};

const TimeCounter = ({ gameTimer }: Props) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    let timer: number | undefined;
    if (gameTimer === GameTimer.RUNNING) {
      timer = window.setInterval(() => {
        setSecondsElapsed(seconds => seconds + 1);
      }, 1000);
    } else if (gameTimer === GameTimer.RESET) {
      window.clearInterval(timer);
      setSecondsElapsed(0);
    } else {
      window.clearInterval(timer);
    }

    return () => {
      window.clearInterval(timer);
    };
  }, [gameTimer]);

  return (
    <div className="flex-column align-center">
      <div className="counter-label">Time</div>
      <Counter count={secondsElapsed} />
    </div>
  );
};

export default TimeCounter;
