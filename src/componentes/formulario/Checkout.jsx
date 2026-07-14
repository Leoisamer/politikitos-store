import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

function Checkout() {

  const { cart, clearCart } = useContext(CartContext);

  const [nombre, setNombre] = useState('');
  
  const [email, setEmail] = useState('');
  
  const [telefono, setTelefono] = useState('');

  const navigate = useNavigate();

  const total = cart.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  const finalizarCompra = async (e) => {

  e.preventDefault();

  const orden = {
    comprador: {
      nombre,
      email,
      telefono
    },
    items: cart,
    total,
    fecha: new Date()
  };

  try {

    const ordenesRef = collection(db, "ordenes");

    const respuesta = await addDoc(ordenesRef, orden);

    clearCart();

    navigate(`/orden/${respuesta.id}`);

  } catch (error) {
    console.error(error);
    alert("Ocurrió un error al finalizar la adopción");
  }
};

  
  return (

    <form onSubmit={finalizarCompra}>

      <h2>Finalizar adopción</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Finalizar adopción
      </button>

    </form>

  );

}

export default Checkout;