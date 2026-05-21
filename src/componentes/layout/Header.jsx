import styles from './Header.module.css';
import NavBar from './NavBar';
import CartWidget from '../carrito/CartWidget';


function Header() {
  return (
    <header className={styles.header}>

      <h1>🟡🔵🔴 PolitiKeros Store</h1>

      <NavBar />

      <CartWidget />

    </header>
  );
}

export default Header;

