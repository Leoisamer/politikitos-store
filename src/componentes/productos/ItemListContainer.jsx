import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import styles from './ItemListContainer.module.css';
import Formulario from '../formulario/Formulario';


function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));

  }, []);

  return (
    <section className={styles.container}>
        
      <h2>Nuestros candidatos en adopción</h2>

      <ItemList productos={productos} />

      <Formulario />
      
    </section>

    
  );
}

export default ItemListContainer;

