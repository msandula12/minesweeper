import React from 'react';

type Props = {
  className?: string;
  max?: number;
  min?: number;
  onChange?: () => unknown;
  type?: string;
  value?: any;
};

const Input = ({
  className,
  max,
  min,
  onChange,
  type = 'text',
  value
}: Props) => {
  return (
    <input
      className={className ? className : ''}
      max={max}
      min={min}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

export default Input;
