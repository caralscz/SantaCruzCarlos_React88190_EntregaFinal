// =============================================================
//
// CartVacio.jsx : 
//    Muestra el mensaje cuando el carrito está vacío
//
// =============================================================

import React from 'react'
import { Link } from 'react-router-dom'
import imgCarritoVacio from '../../public/carritoVacio.png';  


const CartVacio = () => {
  return (
    <div>
        <h1  className='titulo-principal'>Su carrito está vacío !</h1>
        <h2>Lo invitamos a ver nuestros productos.</h2>
                                
        <Link to={'/'}>
              <img src={imgCarritoVacio}  className='imgCarritoVacio' title='Lo invitamos a cargarlo 😊 ! ... ' />                      
        </Link>                     
        <br />
        <Link to={'/'} className="btn btn-primary btn-sm" title="Ver productos">
            Ver productos </Link>
    </div>
  )
}

export default CartVacio