// import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import React from 'react';
import AppRoutes from './components/rutas';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
  
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Funny Styles
        </a>
       <AppRoutes />
       <Navbar />
      </header>

    </div>
  );
}


export default App;
