import React from 'react';

import Icon from './Icon';

const Rules = () => {
  return (
    <>
      <div className="margin-bottom-s">
        <h3 className="mono">Start a new game</h3>
        <p className="indented-s">
          - Press <code>F2</code>
        </p>
      </div>
      <div className="margin-bottom-s">
        <h3 className="mono">Open a square</h3>
        <p className="indented-s">- Left-click</p>
      </div>
      <div className="margin-bottom-s">
        <h3 className="mono">
          Flag a square (
          <Icon name="flag-checkered" />)
        </h3>
        <p className="indented-s">- Right-click</p>
        <p className="indented-s">
          - Left-click while holding down <code>ctrl</code>
        </p>
        <p className="indented-s">
          - Hover over it and press <code>space</code>
        </p>
      </div>
      <div className="margin-bottom-s">
        <h3 className="mono">View adjacent squares</h3>
        <p className="indented-s">
          - Middle-click (left- plus right-click)
        </p>{' '}
      </div>
    </>
  );
};

export default Rules;
