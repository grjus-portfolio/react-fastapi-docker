import React from "react";
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import FetchingData from "./FetchingData";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <FetchingData />
      </header>
    </div>
  );
}

export default App;
