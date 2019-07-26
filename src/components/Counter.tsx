import React from 'react';

type Props = {
  count: number;
};

const Counter = ({ count }: Props) => {
  const paddedCount = String(count).padStart(3, '0');

  return <span className="mono font-l">{paddedCount}</span>;
};

export default Counter;
