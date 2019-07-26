import React from 'react';
import './App.css';

import Minesweeper from './components/Minesweeper';

const App: React.FC = () => {
  return (
    <div className="container">
      <Minesweeper />
    </div>
  );
};

export default App;
