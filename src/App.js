import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

const basename = process.env.PUBLIC_URL || '/';

function Home() {
  return <h1>Bienvenidos a la Página de Inicio de Elizabeth Gutierrez</h1>;
}

function About() {
  return <h2>Acerca de Nosotros</h2>;
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
