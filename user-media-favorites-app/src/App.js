import React from 'react';
import './App.css';
import Favorites from './Favorites';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the list of favorite movies and albums</h1>
        <div className = "Favorites">
          <Favorites/>
        </div>
      </header>
    </div>
  );
}

export default App;
