import React, { ChangeEvent } from 'react';

type Props = {
  className?: string;
  max?: number;
  min?: number;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
  type?: string;
  value?: any;
};

const Input = ({
  className,
  max,
  min,
  name,
  onChange,
  type = 'text',
  value
}: Props) => {
  return (
    <input
      className={className ? className : ''}
      max={max}
      min={min}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

export default Input;
