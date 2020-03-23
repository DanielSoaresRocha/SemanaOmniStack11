import React from 'react';
//import logo from './logo.svg';
import ela from './ela.jpg'
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ela} className="App-logo" alt="logo" />
        <br>
        </br>
        <p>
          Eu te amo minha princesa
        </p>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1K_B9hhgY4_6IDGGj0Fcm3fdtG7Jl0BzC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estou com saudades
        </a>
      </header>
    </div>
  );
}

export default App;
