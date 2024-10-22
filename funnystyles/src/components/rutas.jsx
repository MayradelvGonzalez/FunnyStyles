import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import './style.css';
function Rutas() {
  return (
    <BrowserRouter>
      <nav id='navegacion'>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rutas;


