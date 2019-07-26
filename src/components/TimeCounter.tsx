import React, { useState } from 'react';

import Counter from './Counter';

const TimeCounter = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const startTime = new Date().getTime();

  const countTime = () => {
    const updatedTime = new Date().getTime();
    setSecondsElapsed(parseInt(String((updatedTime - startTime) / 1000)));
  };

  // setInterval(countTime, 1000);

  return <Counter count={secondsElapsed} />;
};

export default TimeCounter;
