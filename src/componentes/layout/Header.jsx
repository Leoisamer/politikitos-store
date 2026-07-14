import styles from './Header.module.css';
import NavBar from './NavBar';


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1 className="logo">
          PolitiKitos
        </h1>
        
        <p className={styles.slogan}>
          PetStore & Adoption Center
        </p>
      </div>

      <NavBar />

    </header>
  );
}

export default Header;

