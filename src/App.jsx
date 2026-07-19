import {Routes, Route} from 'react-router-dom';
import Layout from './componentes/layout/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import ProductoDetalle from './componentes/productos/ProductoDetalle';
import OrdenExitosa from './pages/OrdenExitosa';
import Login from './pages/Login';
import ProtectedRoute from './componentes/ProtectedRoute';
import Admin from './pages/Admin';
import AdminProductos from './componentes/admin/AdminProductos';
import AdminCupones from './componentes/admin/AdminCupones';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/orden/:id" element={<OrdenExitosa />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
          }
        />
        
        <Route path="/admin/productos" element={
          <ProtectedRoute>
            <AdminProductos />
          </ProtectedRoute>
          }
        />
        
        <Route path="/admin/cupones" element={
          <ProtectedRoute>
            <AdminCupones />
          </ProtectedRoute>
          }
        />

      </Route>
    </Routes>
  );
}

export default App;