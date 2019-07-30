import React from 'react';
import './App.css';

import Minesweeper from './components/Minesweeper';
import Rules from './components/Rules';

const App: React.FC = () => {
  return (
    <>
      <h1 className="center mono font-l margin-bottom-l">Minesweeper</h1>
      <div className="flex-row justify-center">
        <div className="column column-sm">
          <h2 className="mono side-heading">Level</h2>
        </div>
        <Minesweeper />
        <div className="column column-sm">
          <h2 className="mono side-heading">Rules</h2>
          <Rules />
        </div>
      </div>
    </>
  );
};

export default App;
