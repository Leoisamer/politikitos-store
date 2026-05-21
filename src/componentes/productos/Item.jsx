import {Link} from 'react-router-dom';
import styles from './Item.module.css';
import {useState} from 'react'


function Item({ id, nombre, precio, imagen, descripcion }) {
  
  const [like, setLike] = useState(false);
  
  return (
    <article className={styles.card}>

      <img src={imagen} alt={nombre} />
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
          {like ? '⭐' : '☆'}
        </span>
      </div>
      
    </article>
  );
}

export default Item;