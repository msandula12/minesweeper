import React from 'react';
import './App.css';

import Minesweeper from './components/Minesweeper';

const App: React.FC = () => {
  return (
    <div className="container">
      <Minesweeper columns={10} rows={10} mines={5} />
    </div>
  );
};

export default App;
