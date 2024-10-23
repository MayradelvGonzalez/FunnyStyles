
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Opciones from './components/Opciones';
import Navbar from './components/Navbar';
// import Rutas from './components/rutas';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opciones" element={<Opciones />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;