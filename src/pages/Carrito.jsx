import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Checkout from '../componentes/formulario/Checkout';

function Carrito() {

  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const [cupon, setCupon] = useState("");
  const [descuento, setDescuento] = useState(0);

  const total = cart.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  const aplicarCupon = () => {

    if (cupon.toUpperCase() === "POLITIKEROS10") {

      setDescuento(total * 0.10);

    } else {

      alert("Cupón inválido");
      setDescuento(0);

    }

  };

  const totalFinal = total - descuento;

  return (
    <section style={{ padding: '2rem' }}>

      <h2>Carrito de adopción 🛒</h2>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>

      {
        cart.length === 0 ? (

          <p>No has adoptado ningún PolitiKito todavía.</p>

        ) : (

          <>

            {cart.map((producto) => (

              <article
                key={producto.id}
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

                  <h4>Precio unitario: ${producto.precio}</h4>

                  <p>Cantidad: {producto.cantidad}</p>

                  <p>
                    Subtotal: $
                    {producto.precio * producto.cantidad}
                  </p>

                  <button
                    onClick={() => removeFromCart(producto.id)}
                  >
                    Eliminar
                  </button>

                </div>

              </article>

            ))}

            <hr style={{ margin: '2rem 0' }} />

            <div style={{ marginBottom: '2rem' }}>

              <input
                type="text"
                placeholder="Cupón de descuento"
                value={cupon}
                onChange={(e) => setCupon(e.target.value)}
              />

              <button
                onClick={aplicarCupon}
                style={{ marginLeft: '10px' }}
              >
                Aplicar
              </button>

              {descuento > 0 && (

                <div style={{ marginTop: '1rem' }}>

                  <p>Descuento: ${descuento.toFixed(2)}</p>

                  <h2>
                    Total final: ${totalFinal.toFixed(2)}
                  </h2>

                </div>

              )}

            </div>

            <h2>Total de la adopción: ${total}</h2>

            <Checkout />

          </>

        )
      }

    </section>
  );

}

export default Carrito;