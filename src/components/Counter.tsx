import React from 'react';

type Props = {
  count: number;
};

const Counter = ({ count }: Props) => {
  return <span className="counter">{count}</span>;
};

export default Counter;
