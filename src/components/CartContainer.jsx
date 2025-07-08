// =============================================================
//
// CartContainer.jsx : 
//   Se fija si el carrito está vacío muestra un mensaje
//   si tiene productos cargados, va a mostrar el carrito
//
// =============================================================

import React, { useContext } from 'react'
import CartVacio from './CartVacio';
import CartView from './CartView';
import { CartContext } from '../context/CartContext';

const CartContainer = () => {
    const {cart} = useContext(CartContext); // Aquí importamos el contexto del carrito

  return (
    <>
        {
            cart.length === 0 ? (
                <CartVacio />
            ) : (
                <CartView />
            )
        }

    </>
  )
}

export default CartContainer