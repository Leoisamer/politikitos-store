import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import CartWidget from '../carrito/CartWidget';
import { useAuth } from '../../context/AuthContext';


function NavBar() {

  const { user, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      {
        user && (
          <Link to="/admin">
            Administración
          </Link>
        )
      }

      <Link to="/carrito" className={styles.carritoLink}>
        Carrito
        <CartWidget />
      </Link>

      {
        user ? (
          <>
            <span>
              {user.email}
            </span>

            <button
              onClick={logout}
            >
              Salir
            </button>

          </>
        ) : (

          <Link to="/login">
            Ingresar
          </Link>
        )
      }
    </nav>
  );
}

export default NavBar;