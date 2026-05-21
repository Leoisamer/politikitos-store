import {useContext} from 'react';
import {CartContext} from '../context/CartContext';


function Carrito() {

  const {cart, removeFromCart,clearCart} = useContext(CartContext);

  return (
    <section style={{padding: '2rem'}}>
      <h2>Carrito de adopción 🛒</h2>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>

      {
        cart.length === 0
        ? (
          <p>No has adoptado ningún PolitiKero todavía.</p>
        ) : (
          cart.map((producto, index) => (
            <article
              key={index}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginBottom: '20px',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px'
              }}
            >

              <img
                src={producto.imagen}
                alt={producto.nombre}
                width="120"
              />

              <div>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <h4>${producto.precio}</h4>
                <button
                  onClick={() => removeFromCart(producto.id)}
                >
                    Eliminar
                </button>
              </div>
            </article>
          ))
        )
      }
    </section>
  );
}

export default Carrito;