import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import styles from './ProductoDetalle.module.css';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';


function ProductoDetalle() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    const obtenerProducto = async () => {

      try {

        const productoRef = doc(db, "productos", id);

        const snapshot = await getDoc(productoRef);

        if (snapshot.exists()) {

          setProducto({
            id: snapshot.id,
            ...snapshot.data(),
          });

        }

      } catch (error) {

        console.error(error);

      }

    };

    obtenerProducto();

  }, [id]);

  if (!producto) {
    return <h2>Cargando producto...</h2>;
  }

  return (

    <section className={styles.detalle}>

      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <div>

        <h2>{producto.nombre}</h2>

        <p>{producto.descripcion}</p>

        <h3>${producto.precio}</h3>

        <button onClick={() => addToCart(producto)}>
          Adoptar político
        </button>

      </div>

    </section>

  );

}

export default ProductoDetalle;