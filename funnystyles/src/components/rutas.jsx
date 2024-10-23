import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import './style.css';
function Rutas() {
  return (
    
    <BrowserRouter>
    soy las rutas
    {/* <nav>
      <Link to="/">Inicio</Link>
      <Link to="/navbar">Opciones</Link>
    </nav> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes> */}
    </BrowserRouter>
  );
}
export default Rutas;


