import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { useState, useRef } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Item({ id, nombre, precio, imagen, descripcion }) {

  const { addToCart } = useContext(CartContext);

  const [like, setLike] = useState(false);

  const [hover, setHover] = useState(false);

  const videoRef = useRef(null);

  const video = imagen
    .replace("/img/", "/videos/")
    .replace(".jpg", ".mp4");

  const entrar = () => {
    setHover(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const salir = () => {
    setHover(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (

    <article className={styles.card}>

      <div
        className={styles.media}
        onMouseEnter={entrar}
        onMouseLeave={salir}
      >

      <img
        src={imagen}
        alt={nombre}
        style={{
          opacity: hover ? 0 : 1
        }}
/>

        <video
          ref={videoRef}
          className={hover ? styles.videoActivo : styles.video}
          src={video}
          muted
          playsInline
          preload="metadata"
        />

      </div>

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <p>${precio}</p>

      <div className={styles.actions}>

        <Link to={`/producto/${id}`}>
          <button>Ver detalle</button>
        </Link>

        <span
          className={styles.star}
          onClick={() => setLike(!like)}
        >
          {like ? "⭐" : "☆"}
        </span>

      </div>

      <button
        onClick={() => addToCart({ id, nombre, precio, imagen })}
      >
        Adoptar político
      </button>

    </article>

  );

}

export default Item;