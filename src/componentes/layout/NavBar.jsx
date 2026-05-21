import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';


function NavBar() {
  return (
    <nav className={styles.nav}>

      <Link to="/">Inicio</Link>

      <Link to="/productos">Productos</Link>

      <Link to="/carrito">Carrito</Link>

    </nav>
  );
}

export default NavBar;