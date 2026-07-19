import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

function CartWidget() {

  const { cart } = useContext(CartContext);

  const cantidadTotal = cart.reduce(
    (acumulador, producto) => acumulador + producto.cantidad,
    0
  );

  return (
    <div className={styles.cart}>
      🛒 {cantidadTotal}
    </div>
  );
}

export default CartWidget;