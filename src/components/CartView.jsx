// =============================================================
//
// CartView.jsx : Muestra el contenido del carrito
//
// =============================================================

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart , limpiarCarrito, removeItem, precioTotal} = useContext(CartContext); // Aquí importamos el contexto del carrito
  
    // --- Confirmación de que efectivamente desea borrar todo el carrito ---
    const confirmarVaciarCarrito = () =>{
        Swal.fire({
            title:'¿ Desea borrar todo el contenido del carrito?',
            text: "Esta acción no se puede deshacer.",
            icon: 'warning', // Icono de advertencia
            showDenyButton:true,
            denyButtonColor: '#6c757d', // Color gris para el botón de NO
            denyButtonText:'No, cancelar',
            confirmButtonColor: '#dc3545', // Color rojo para el botón de confirmación
            confirmButtonText:'Si, eliminar'
        }).then((result)=>{
            if (result.isConfirmed){
                limpiarCarrito();
                Swal.fire('¡Carrito vaciado!', '', 'success'); // Mensaje de Todo Bien
            }
        })
    }
    // FIN de la Confirmación de borrado ---
    
    // --- Confirmación para eliminar un ítem específico ---
    const confirmarRemoveItem = (itemId, itemName) => { // El item que desea borrar
        Swal.fire({
            title: `¿Desea eliminar "${itemName}" del carrito?`, // Mensaje específico
            text: "Esta acción no se puede deshacer.",
            icon: 'warning', // Icono de advertencia
            showCancelButton: true,
            confirmButtonColor: '#dc3545', // Color rojo para el botón de confirmación
            cancelButtonColor: '#6c757d', // Color gris para el botón de cancelar
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(itemId); // Si confirma, llamamos a la función removeItem con el ID del ítem
                Swal.fire('¡Eliminado!', `"${itemName}" ha sido eliminado del carrito.`, 'success'); // Mensaje de Todo Bien
            }
        });
    };
    // --- FIN Confirmación para eliminar un ítem específico ---

    return (
    <div>
        <h2>Detalle del carrito</h2>
        <div>
        {cart.map(item => (
            <div key={item.id} className='cartViewContenedor'>
                <div>
                    <img src={item.imagen} alt={item.nombre} title={item.nombre} style={{width:'10rem'}} />
                </div>
                <div style={{display:'flex', flexDirection:'column', width:'50%', padding:'10px'}}>
                    <span>{item.nombre}</span>
                    <span>Precio: ${item.precio}</span>
                    <span>Cantidad: {item.quantity}</span>
                    <span>Precio final: ${item.precio * item.quantity}</span>
                    {/* --- Llamamos a la función de confirmación de borrado de un ítem --- */}
                            <button
                                onClick={() => confirmarRemoveItem(item.id, item.nombre)}
                                className="btn btn-danger btn-sm w-50"
                                title="Eliminar este ítem del carrito"
                            >
                                Eliminar ítem
                            </button>
                </div>
            </div>
        ))} 
        </div>

        <span>
        Total a pagar: ${precioTotal()} 
        </span>

        <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'10px', border:'2px solid #ccc'}}>
            <Link to='/' className='btn btn-primary btn-sm'  title="Ver todos los productos">Seguir comprando</Link>
            <button onClick={confirmarVaciarCarrito} className="btn btn-danger btn-sm" title="Vaciar el carrito">Vaciar el carrito</button>
            <Link to='/finalizar' className="btn btn-success btn-sm" title="Finalizar la compra">Finalizar compra</Link>

        </div>
    </div>
  )
}

export default CartView