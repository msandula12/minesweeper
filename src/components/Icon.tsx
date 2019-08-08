import React from 'react';

type Props = {
  className?: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  withMargin?: boolean;
};

const Icon = ({ className, name, onClick, withMargin }: Props) => {
  return (
    <i
      onClick={onClick}
      className={`icon fas fa-${name} ${withMargin ? 'margin-right-xs' : ''} ${
        className ? className : ''
      }`}
    />
  );
};

export default Icon;
