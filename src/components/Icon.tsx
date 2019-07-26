import React from 'react';

type Props = {
  name: string;
  withMargin?: boolean;
};

const Icon = ({ name, withMargin }: Props) => {
  return (
    <i className={`fas fa-${name} ${withMargin ? 'margin-right-xs' : ''}`} />
  );
};

export default Icon;
