import {Routes, Route} from 'react-router-dom';
import Layout from './componentes/layout/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import ProductoDetalle from './componentes/productos/ProductoDetalle';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>
    </Routes>
  );
}

export default App;