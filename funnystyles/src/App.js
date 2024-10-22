import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';  
function HomePage() {
  return <h1>Página de Inicio</h1>;
}

function AboutPage() {
  return <h1>Acerca de</h1>;
}

function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <div className="App">
//     <lInk to="/Home">Home</lInk>
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <a
//           className="App-link"
//           href="/home"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Funny Styles
//         </a>
//         <Route path="/Home" element={<Home />}/>
//       </header>

//     </div></Routes></BrowserRouter>
//   );
// }
return (
  <BrowserRouter>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
