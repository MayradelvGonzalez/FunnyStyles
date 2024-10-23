import { Link } from 'react-router-dom';
import './style.css'
function Navbar() {
  return (
    <nav id='navegacion'>

      <Link to="/">Inicio</Link>
      <Link to="/opciones">Opciones</Link>
    </nav>
  );
}

export default Navbar;