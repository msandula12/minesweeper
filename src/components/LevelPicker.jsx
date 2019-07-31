import React from 'react';

import { GameConfigurations } from '../types/general';

const LevelPicker = () => {
  return (
    <table cellspacing="0">
      <tr>
        <th>Level</th>
        <th>Columns</th>
        <th>Rows</th>
        <th>Mines</th>
      </tr>
      {GameConfigurations.map(config => (
        <tr key={config.level} className="row-level">
          <td>{config.level}</td>
          <td className="center">{config.columns}</td>
          <td className="center">{config.rows}</td>
          <td className="center">{config.mines}</td>
        </tr>
      ))}
    </table>
  );
};

export default LevelPicker;
