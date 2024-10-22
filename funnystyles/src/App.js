// // import logo from './logo.svg';
// import './App.css';
// // import Home from './components/Home';
// // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
// import React from 'react';
// import AppRoutes from './components/rutas.jsx';
// import Navbar from './components/Navbar.jsx';


// function App() {
//   return (
//     <div className="App">
  
//      <Navbar />
//      <AppRoutes />
//     </div>
//   );
// }


// export default App;
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Rutas from './components/rutas';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;