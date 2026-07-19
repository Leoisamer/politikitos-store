import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from "../componentes/formulario/Checkout";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function Carrito() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const [codigo, setCodigo] = useState("");

  const [cupones, setCupones] = useState([]);

  const [descuento, setDescuento] = useState(0);

  const total = cart.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  const totalFinal = total - descuento;

  useEffect(() => {

    const obtenerCupones = async () => {

      const snapshot = await getDocs(
        collection(db, "cupones")
      );

      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setCupones(lista);

    };

    obtenerCupones();

  }, []);

  const aplicarCupon = () => {

    const cupon = cupones.find(
      c =>
        c.codigo.toUpperCase() === codigo.toUpperCase() &&
        c.activo
    );

    if (!cupon) {
      alert("Cupón inválido");
      setDescuento(0);
      return;
    }

    setDescuento(total * (cupon.descuento / 100));

  };

  return (
    <section style={{ padding: "2rem" }}>

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
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginBottom: "20px",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: "1rem",
                  borderRadius: "10px"
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
                    Subtotal: ${producto.precio * producto.cantidad}
                  </p>

                  <button
                    onClick={() => removeFromCart(producto.id)}
                  >
                    Eliminar
                  </button>

                </div>

              </article>

            ))}

            <hr style={{ margin: "2rem 0" }} />

            <div style={{ marginBottom: "2rem" }}>

              <input
                type="text"
                placeholder="Cupón de descuento"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />

              <button
                onClick={aplicarCupon}
                style={{ marginLeft: "10px" }}
              >
                Aplicar
              </button>

              <div style={{ marginTop: "1rem" }}>

                <p>Subtotal: ${total.toFixed(2)}</p>

                {descuento > 0 ? (

                  <>

                    <p style={{ color: "green" }}>
                      Descuento aplicado: -${descuento.toFixed(2)}
                    </p>

                    <h2>
                      Total final: ${totalFinal.toFixed(2)}
                    </h2>

                  </>

                ) : (

                  <h2>
                    Total: ${total.toFixed(2)}
                  </h2>

                )}

              </div>

            </div>

            <Checkout
              totalFinal={totalFinal}
              descuento={descuento}
              codigo={codigo}
            />

          </>

        )
      }

    </section>
  );

}

export default Carrito;