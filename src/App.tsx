import React from 'react';
import './App.css';

import Minesweeper from './components/Minesweeper';

const App: React.FC = () => {
  return (
    <div className="flex-column">
      <h1 className="center mono font-l">Minesweeper</h1>
      <Minesweeper />
    </div>
  );
};

export default App;
