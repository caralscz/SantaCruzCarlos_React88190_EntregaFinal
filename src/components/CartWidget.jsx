// =============================================================
//
// CartWidget.jsx
// Muestra el icono del carrito de compras y la cantidad de productos comprados
// Es llamada en el NavBar.jsx 
//
// =============================================================

import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const{cantidadTotal}= useContext(CartContext);

    return (
        <div>
            
            <MdOutlineShoppingCart color="grey" size={25}/>
            <Badge bg="success" >{cantidadTotal()}</Badge>

        </div>
    );
    }

    export default CartWidget;