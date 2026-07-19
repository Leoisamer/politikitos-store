import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <span className={styles.badge}>
          🐣 Nueva colección
        </span>

        <h1>
          Adoptá tu Politikito favorito
        </h1>

        <p>
          Politikitos es una colección de mascotas virtuales
          satíricas inspiradas en personajes de la política.
          Elegí tu favorito, adoptalo y divertite con una
          experiencia llena de humor.
        </p>

        <div className={styles.botones}>

          <Link to="/productos">
            <button>
              Ver catálogo
            </button>
          </Link>
          
        </div>
      </div>

      <div className={styles.imagenes}>
        <img src="/img/miniplatanote.jpg" alt="Mini Platanote" />
        <img src="/img/miniflor.jpg" alt="Mini Flor" />
        <img src="/img/minimona.jpg" alt="Mini Mona" />
        <img src="/img/minipelon.jpg" alt="Mini Pelón" />
      </div>
    </section>
  );
}

export default Hero;