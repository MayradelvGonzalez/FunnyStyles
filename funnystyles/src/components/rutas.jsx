import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import 'style.css';
function Rutas() {
  return (
    <BrowserRouter>
      <nav id='navegacion'>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rutas;