import React from 'react';
import classNames from 'classnames';

type Props = {
  count: number;
};

const Counter = ({ count }: Props) => {
  const paddedCount =
    count < 0
      ? `-${String(Math.abs(count)).padStart(3, '0')}`
      : String(count).padStart(3, '0');

  const counterCls = classNames('mono', 'font-l', {
    danger: count < 0
  });

  return <span className={counterCls}>{paddedCount}</span>;
};

export default Counter;
