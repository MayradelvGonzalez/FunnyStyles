import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/home">Soy home</Link>
    </nav>
  );
}

export default Navbar;