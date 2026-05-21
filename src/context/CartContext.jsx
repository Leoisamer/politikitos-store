import {createContext, useState} from 'react';

export const CartContext = createContext();


function CartProvider({children}) {
  
  const removeFromCart = (id) => {

    const carritoFiltrado = cart.filter(
        (producto) => producto.id !== id
    );

    setCart(carritoFiltrado);
  };

  const clearCart = () => {
    setCart([]);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {

    setCart([...cart, producto]);

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        }
      }
    >

      {children}

    </CartContext.Provider>

  );
}

export default CartProvider;

