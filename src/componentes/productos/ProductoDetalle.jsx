import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './ProductoDetalle.module.css';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';


function ProductoDetalle() {

  const {id} = useParams();
  
  const [producto, setProducto] = useState(null);

  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => {
      
        const productoEncontrado = data.find(
          (prod) => prod.id == (id)
        );
        
        setProducto(productoEncontrado);

      });

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