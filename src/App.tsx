import React from 'react';
import './App.css';

import Minesweeper from './components/Minesweeper';

const App: React.FC = () => {
  return (
    <>
      <h1 className="center mono font-l">Minesweeper</h1>
      <Minesweeper />
    </>
  );
};

export default App;
