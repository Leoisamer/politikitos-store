import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import styles from './CartWidget.module.css';


function CartWidget() {

  const {cart} = useContext(CartContext);

  return (
    <div className={styles.cart}>
      🛒 {cart.length}
    </div>
  );
}

export default CartWidget;