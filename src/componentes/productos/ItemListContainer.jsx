import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';
import Formulario from '../formulario/Formulario';
import styles from './ItemListContainer.module.css';
import { db } from '../../firebase/config';


function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const obtenerProductos = async () => {
      try {
        setLoading(true);

        const productosRef = collection(db, 'productos');

        const snapshot = await getDocs(productosRef);

        const productosFirestore = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id
          };
        });

        setProductos(productosFirestore);

      } catch (error) {
        console.error(error);
        setError("No se pudieron cargar los productos.");

      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();

  }, []);

  if (loading) {
    return (
      <section
        style={{
          padding: "3rem",
          textAlign: "center"
        }}
      >
        <h2>Cargando productos...</h2>
      </section>
    );

  }

  if (error) {
    return (
      <section
        style={{
          padding: "3rem",
          textAlign: "center"
        }}
      >
        <h2>{error}</h2>
      </section>
    );

  }

  return (

    <section className={styles.container}>
      <h2>Nuestros candidatos en adopción</h2>

      <ItemList productos={productos} />

      <Formulario />
    </section>
  );
}

export default ItemListContainer;