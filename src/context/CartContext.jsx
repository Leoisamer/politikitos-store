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

    const productoExistente = cart.find(
      (item) => item.id === producto.id
    );

    if (productoExistente) {

      const carritoActualizado = cart.map((item) =>

        item.id === producto.id
          ? {
              ...item,
              cantidad: item.cantidad + 1
            }
          : item

      );

      setCart(carritoActualizado);

    } else {

      setCart([
        ...cart,
        {
          ...producto,
          cantidad: 1
        }
      ]);

    }

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

